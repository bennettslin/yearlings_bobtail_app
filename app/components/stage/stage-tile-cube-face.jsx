import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getPolygonPointsForFrontCubeFace,
         getPolygonPointsForTopCubeFace,
         getPolygonPointsForSideCubeFace } from '../../helpers/tiles-helper'

const propTypes = {
    className: PropTypes.string,
    colour: PropTypes.string.isRequired,
    isFloor: PropTypes.bool.isRequired,
    slantDirection: PropTypes.string.isRequired,
    woodFractions: PropTypes.object.isRequired,
    tileFractions: PropTypes.object.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

/* eslint-disable no-unused-vars */
const StageTileCubeFace = ({

    className,
    colour,
    isFloor,
    slantDirection,
    woodFractions,
    tileFractions,
    stageWidth,
    stageHeight

}) => {

    let rectAttributes;

    if (className === 'front') {
        rectAttributes = getPolygonPointsForFrontCubeFace({
            tileFractions,
            woodFractions,
            stageWidth,
            stageHeight
        })

    } else if (className === 'top') {
        rectAttributes = getPolygonPointsForTopCubeFace({
            tileFractions,
            woodFractions,
            stageWidth,
            stageHeight
        })

    } else if (className === 'side') {
        rectAttributes = getPolygonPointsForSideCubeFace({
            tileFractions,
            woodFractions,
            stageWidth,
            stageHeight
        })
    }

    return (
        <rect {...rectAttributes}
            className={classnames(
                'cube-face',
                className
            )}
        />
    )
}

StageTileCubeFace.propTypes = propTypes

export default StageTileCubeFace
