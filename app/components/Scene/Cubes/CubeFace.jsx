import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileFace,
         getPolygonPointsForFrontFace,
         getPolygonPointsForSideFace,
         getPolygonPointsString } from './helpers/polygonHelper'

import { getBitmapMatrixForFace } from './helpers/bitmapHelper'

import { BITMAPS } from '../../../constants/bitmaps'

const pointPropType = PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,

    edgePropType = PropTypes.shape({
        front: pointPropType,
        back: pointPropType
    }).isRequired,

    facePropType = PropTypes.shape({
        left: edgePropType,
        right: edgePropType
    }).isRequired,

    propTypes = {
        isFloor: PropTypes.bool,
        isLeft: PropTypes.bool,
        face: PropTypes.string.isRequired,
        bitmapKey: PropTypes.string.isRequired,
        slantDirection: PropTypes.string,

        // Needed to render faces of dynamic height.
        zIndex: PropTypes.number,

        cubeCorners: PropTypes.shape({
            tile: facePropType,
            base: facePropType
        }).isRequired,
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

    const bitmap = BITMAPS[bitmapKey]

    let faceString = face,
        polygonPoints,
        bitmapMatrix

    if (face === 'tile') {
        faceString = isFloor ? 'floorTile' : 'ceilingTile'

        polygonPoints = getPolygonPointsForTileFace({
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight,
            isFloor
        })

        bitmapMatrix = getBitmapMatrixForFace({
            bitmap,
            polygonPoints
        })

    } else if (face === 'front') {
        polygonPoints = getPolygonPointsForFrontFace({
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight,
            isFloor
        })

        bitmapMatrix = getBitmapMatrixForFace({
            bitmap,
            polygonPoints,
            zIndex,
            isFloor
        })

    } else if (face === 'side') {
        polygonPoints = getPolygonPointsForSideFace({
            isLeft,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight,
            isFloor
        })

        bitmapMatrix = getBitmapMatrixForFace({
            bitmap,
            polygonPoints,
            zIndex,
            isFloor
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
