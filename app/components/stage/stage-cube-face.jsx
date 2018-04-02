import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getPolygonPointsForTileCube,
         getPolygonPointsForFrontCube,
         getPolygonPointsForSideCube } from '../../helpers/tiles-helper'

const propTypes = {
    face: PropTypes.string.isRequired,
    isLeft: PropTypes.bool,
    slantDirection: PropTypes.string,
    cubeCorners: PropTypes.object.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

/* eslint-disable no-unused-vars */
const StageCubeFace = ({

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
            className={classnames(
                'stage-cube-face',
                face
            )}
            points={polygonPoints}
        />
    )
}

StageCubeFace.propTypes = propTypes

export default StageCubeFace
