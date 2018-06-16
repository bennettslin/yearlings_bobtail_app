import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileFace,
         getPolygonPointsForFrontFace,
         getPolygonPointsForSideFace,
         getPolygonPointsString } from './helpers/polygonHelper'

import { getBitmapMatrixForFace } from './helpers/bitmapHelper'

import { BITMAPS } from '../../../constants/bitmaps'
import { CUBE_Z_AXIS_LENGTH } from '../../../constants/stage'

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

    const

        /**
         * Get the maximum height of the face, based on the cube's zIndex. If
         * negative, make it zero.
         */
        maxFaceHeight = Math.max(
            isFloor ? zIndex : (CUBE_Z_AXIS_LENGTH - zIndex),
            0
        ),

        isTile = face === 'tile',

        /**
         * Only render if it's a tile face below the halfway zIndex, or a face with height.
         */
        doRender = isTile ?
            maxFaceHeight < (CUBE_Z_AXIS_LENGTH / 2) :
            maxFaceHeight

    if (!doRender) {
        return null
    }

    const bitmap = BITMAPS[bitmapKey]

    let faceString = face,
        polygonPoints,
        bitmapMatrix

    if (isTile) {
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
            maxFaceHeight,
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
            maxFaceHeight,
            isFloor
        })
    }

    const polygonPointsString = getPolygonPointsString(polygonPoints)

    return (
        <g className={cx(
            'CubeFace',

            // This is just used to make it easier to find in the DOM.
            `CubeFace__${faceString}`
        )}>
            {/* Single polygon for the base colour. */}
            <polygon
                className={cx(
                    'CubeFace__baseColour',
                    'Pixel'
                )}
                fill={`#${bitmap.base}`}
                points={polygonPointsString}
            />

            {bitmapMatrix.map((matrixRow, yIndex) => {

                return matrixRow.map((matrixObject, xIndex) => {

                    if (matrixObject === null) {
                        // This pixel location will just show the base colour.
                        return null
                    }

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

            {/* Single polygon for the overlying shade. */}
            <polygon
                className={cx(
                    'CubeFace__shade',
                    `CubeFace__shade__${faceString}`
                )}
                points={polygonPointsString}
            />
        </g>
    )
}

CubeFace.propTypes = propTypes

export default CubeFace
