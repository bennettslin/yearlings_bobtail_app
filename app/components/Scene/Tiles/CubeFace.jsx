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
        wood: PropTypes.shape({
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

    face,
    isLeft,
    bitmapKey,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight

}) => {

    const bitmap = BITMAPS[bitmapKey]

    let facePolygonPoints,
        bitmapMatrix

    if (face === 'tile') {
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
    }

    return (
        <g className="CubeFace">
            <polygon
                className={cx(
                    'CubeFace__stroke',
                    `CubeFace__${face}`
                )}
                points={getPolygonPointsString(facePolygonPoints)}
            />
            {/* Side will not render bitmap, at least for now. */}
            {face !== 'side' && (
                bitmapMatrix.map((matrixRow, rowIndex) => {
                    return matrixRow.map((matrixObject, objectIndex) => {

                        const uniqueId = `${rowIndex}_${objectIndex}`,
                            { fill,
                              polygonPoints } = matrixObject,

                            fillString = `#${fill}`

                        return (
                            <polygon
                                key={uniqueId}
                                className="CubeFace__pixel"
                                fill={fillString}
                                points={getPolygonPointsString(polygonPoints)}
                            />
                        )
                    })
                })
            )}
        </g>
    )
}

CubeFace.propTypes = propTypes

export default CubeFace
