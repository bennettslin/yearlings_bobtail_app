import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileFace,
         getPolygonPointsForFrontFace,
         getPolygonPointsForSideFace,
         getPolygonPointsString,

         getBitmapMatrixForTileFace,
         getBitmapMatrixForFrontFace } from './facesHelper'

import { BITMAPS } from '../../../constants/bitmaps'

const propTypes = {
    isFloor: PropTypes.bool,
    isLeft: PropTypes.bool,
    face: PropTypes.string.isRequired,
    bitmapKey: PropTypes.string.isRequired,
    slantDirection: PropTypes.string,
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
    cubeCorners,
    stageWidth,
    stageHeight

}) => {

    const bitmap = BITMAPS[bitmapKey]

    let faceString = face,
        facePolygonPoints,
        bitmapMatrix

    if (face === 'tile') {
        faceString = isFloor ? 'floorTile' : 'ceilingTile'

        facePolygonPoints = getPolygonPointsForTileFace({
            cubeCorners,
            stageWidth,
            stageHeight
        })

        bitmapMatrix = getBitmapMatrixForTileFace(
            bitmap,
            facePolygonPoints
        )

    } else if (face === 'front') {
        facePolygonPoints = getPolygonPointsForFrontFace({
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

        bitmapMatrix = getBitmapMatrixForFrontFace(
            bitmap,
            facePolygonPoints
        )

    } else if (face === 'side') {
        facePolygonPoints = getPolygonPointsForSideFace({
            isLeft,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

        bitmapMatrix = getBitmapMatrixForFrontFace(
            bitmap,
            facePolygonPoints
        )
    }

    return (
        <g className={cx(
            'CubeFace',
            `CubeFace__${faceString}`
        )}>
            {/* Side will not render bitmap, at least for now. */}
            {bitmapMatrix.map((matrixRow, rowIndex) => {
                return matrixRow.map((matrixObject, objectIndex) => {

                    const uniqueId = `${rowIndex}_${objectIndex}`,
                        { fill,
                            polygonPoints } = matrixObject,

                        fillString = `#${fill}`

                    return (
                        <polygon
                            key={uniqueId}
                            className={cx(
                                'CubePixel',
                                `CubePixel__${uniqueId}`
                            )}
                            fill={fillString}
                            points={getPolygonPointsString(polygonPoints)}
                        />
                    )
                })
            })}
            <polygon
                className={cx(
                    'CubeFace__stroke'
                )}
                points={getPolygonPointsString(facePolygonPoints)}
            />
        </g>
    )
}

CubeFace.propTypes = propTypes

export default CubeFace
