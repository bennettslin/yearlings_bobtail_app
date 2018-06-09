import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileCube,
         getPolygonPointsForFrontCube,
         getPolygonPointsForSideCube } from './facesHelper'

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

const TileFace = ({

    face,
    isLeft,
    bitmapKey,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight

}) => {

    const bitmap = BITMAPS[bitmapKey]

    let polygonPoints;

    // TODO: Eventually get rid of this, of course.
    if (bitmapKey && !bitmapKey) {
        console.error(bitmap)
    }

    if (face === 'tile') {
        polygonPoints = getPolygonPointsForTileCube({
            cubeCorners,
            stageWidth,
            stageHeight
        })

    } else if (face === 'front') {
        polygonPoints = getPolygonPointsForFrontCube({
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

    } else if (face === 'side') {
        polygonPoints = getPolygonPointsForSideCube({
            isLeft,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })
    }

    return (
        <g
            className={cx(
                'TileFace'
            )}
        >
            <polygon
                className={cx(
                    'TileCubeFace__stroke',
                    `TileCubeFace__${face}`
                )}
                points={polygonPoints}
            />
        </g>
    )
}

TileFace.propTypes = propTypes

export default TileFace
