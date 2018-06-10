import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileFace,
         getPolygonPointsForFrontFace,
         getPolygonPointsForSideFace,
         getPolygonPointsString,

         getBitmapMatrixForTileFace,
         getBitmapMatrixForDynamicFace } from './facesHelper'

import { BITMAPS } from '../../../constants/bitmaps'

const propTypes = {
    isFloor: PropTypes.bool,
    isLeft: PropTypes.bool,
    face: PropTypes.string.isRequired,
    bitmapKey: PropTypes.string.isRequired,
    slantDirection: PropTypes.string,

    // Needed to render faces of dynamic height.
    zIndex: PropTypes.number,

    cubeCorners: PropTypes.shape({
        tile: PropTypes.shape({
            left: PropTypes.shape({
                front: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                }),
                back: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                })
            }).isRequired,
            right: PropTypes.shape({
                front: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                }),
                back: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                })
            }).isRequired
        }),
        base: PropTypes.shape({
            left: PropTypes.shape({
                front: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                }),
                back: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                })
            }).isRequired,
            right: PropTypes.shape({
                front: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                }),
                back: PropTypes.shape({
                    x: PropTypes.number.isRequired,
                    y: PropTypes.number.isRequired
                })
            }).isRequired
        })
    }),
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const CubeFace = ({

    isFloor,
    isLeft,
    face,
    bitmapKey,
    slantDirection,
    zIndex,
    cubeCorners,
    stageWidth,
    stageHeight

}) => {

    const bitmap = BITMAPS[bitmapKey],

        // Determine height of dynamic faces.
        zHeight = isFloor ? zIndex : (20 - zIndex)

    let faceString = face,
        polygonPoints,
        bitmapMatrix

    if (face === 'tile') {
        faceString = isFloor ? 'floorTile' : 'ceilingTile'

        polygonPoints = getPolygonPointsForTileFace({
            cubeCorners,
            stageWidth,
            stageHeight
        })

        bitmapMatrix = getBitmapMatrixForTileFace({
            bitmap,
            polygonPoints
        })

    } else if (face === 'front') {
        polygonPoints = getPolygonPointsForFrontFace({
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

        bitmapMatrix = getBitmapMatrixForDynamicFace({
            bitmap,
            polygonPoints,
            zHeight
        })

    } else if (face === 'side') {
        polygonPoints = getPolygonPointsForSideFace({
            isLeft,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

        bitmapMatrix = getBitmapMatrixForDynamicFace({
            bitmap,
            polygonPoints,
            zHeight
        })
    }

    return (
        <g className={cx(
            'CubeFace',
            `CubeFace__${faceString}`
        )}>
            {/* Side will not render bitmap, at least for now. */}
            {bitmapMatrix.map((matrixRow, yIndex) => {

                return matrixRow.map((matrixObject, xIndex) => {

                    const uniqueId = `x${xIndex}y${yIndex}`,
                        { fill,
                          polygonPoints: pixelPolygonPoints } = matrixObject,

                        fillString = `#${fill}`

                    return (
                        <polygon
                            key={uniqueId}
                            className={cx(
                                'Pixel',
                                `Pixel__${uniqueId}`
                            )}
                            fill={fillString}
                            points={getPolygonPointsString(
                                pixelPolygonPoints
                            )}
                        />
                    )
                })
            })}

            <polygon
                className={cx(
                    'CubeFace__stroke'
                )}
                points={getPolygonPointsString(polygonPoints)}
            />
        </g>
    )
}

CubeFace.propTypes = propTypes

export default CubeFace
