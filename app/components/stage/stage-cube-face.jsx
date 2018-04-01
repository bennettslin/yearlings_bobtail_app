import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getPolygonPointsForTileCube,
         getPolygonPointsForTopCube,
         getPolygonPointsForSideCube } from '../../helpers/tiles-helper'

const propTypes = {
    face: PropTypes.string.isRequired,
    cubeCorners: PropTypes.object.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

/* eslint-disable no-unused-vars */
const StageCubeFace = ({

    face,
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

    } else if (face === 'top') {
        polygonPoints = getPolygonPointsForTopCube({
            cubeCorners,
            stageWidth,
            stageHeight
        })

    } else if (face === 'side') {
        polygonPoints = getPolygonPointsForSideCube({
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
