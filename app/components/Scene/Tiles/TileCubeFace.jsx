import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileCube,
         getPolygonPointsForFrontCube,
         getPolygonPointsForSideCube } from '../../../helpers/tileFacesHelper'

const propTypes = {
    face: PropTypes.string.isRequired,
    isLeft: PropTypes.bool,
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

const TileCubeFace = ({

    face,
    isLeft,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight

}) => {

    let polygonPoints;

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
                'TileCubeFace'
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

TileCubeFace.propTypes = propTypes

export default TileCubeFace
