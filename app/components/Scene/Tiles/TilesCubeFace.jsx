import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPolygonPointsForTileCube,
         getPolygonPointsForFrontCube,
         getPolygonPointsForSideCube } from '../../../helpers/tilesHelper'

const propTypes = {
    face: PropTypes.string.isRequired,
    isLeft: PropTypes.bool,
    slantDirection: PropTypes.string,
    cubeCorners: PropTypes.object.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

/* eslint-disable no-unused-vars */
const TilesCubeFace = ({

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
        <polygon
            className={cx(
                'TilesCubeFace',
                `TilesCubeFace__${face}`
            )}
            points={polygonPoints}
        />
    )
}

TilesCubeFace.propTypes = propTypes

export default TilesCubeFace
