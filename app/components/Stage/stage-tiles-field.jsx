// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import StageTiles from './stage-tiles'

import { STAGE_Y_PERCENTAGE } from '../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const StageTilesWood = ({
    stageWidth,
    stageHeight
}) => {

    // Make wood stageHeight just slightly taller than tiles.
    const woodHeight = stageHeight * (STAGE_Y_PERCENTAGE + 2) * 0.01

    return (
        <DynamicSvg
            className="stage-wood"
            viewBoxWidth={stageWidth}
            viewBoxHeight={woodHeight}
        >
            <rect
                x={0}
                y={0}
                width={stageWidth}
                height={woodHeight}
            />
        </DynamicSvg>
    )
}

const StageTilesField = (props) => {

    const { isFloor,
            stageWidth,
            stageHeight } = props

    return (
        <div className={cx(
            'stage-tiles-field',
            isFloor ? 'floor' : 'ceiling'
        )}>
            <StageTilesWood
                stageWidth={stageWidth}
                stageHeight={stageHeight}
            />

            <StageTiles {...props} />
        </div>
    )
}

StageTilesField.propTypes = propTypes

export default StageTilesField
