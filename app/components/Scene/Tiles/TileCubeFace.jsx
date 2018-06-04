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
    cubeCorners: PropTypes.object.isRequired,
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
