// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import DynamicSvg from '../dynamic-svg/dynamic-svg'

import StageTiles from './stage-tiles'

import { STAGE_Y_PERCENTAGE } from '../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const StageTilesField = (props) => {

    const { isFloor,
            stageWidth,
            stageHeight } = props,

        // Make wood height just slightly taller than tiles.
        woodHeight = stageHeight * (STAGE_Y_PERCENTAGE + 2) * 0.01

    return (
        <div className={classnames(
            'stage-tiles-field',
            isFloor ? 'floor' : 'ceiling'
        )}>
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

            <StageTiles {...props} />
        </div>
    )
}

StageTilesField.propTypes = propTypes

export default StageTilesField
