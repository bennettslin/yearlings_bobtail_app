// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import { SKY_NO_TIME,
        SKY_NO_SEASON } from '../../constants/stageValues'

const defaultProps = {
    sky: {
        time: SKY_NO_TIME,
        season: SKY_NO_SEASON
    }
}

const propTypes = {
    sky: PropTypes.shape({
        time: PropTypes.string.isRequired,
        season: PropTypes.string.isRequired
    }).isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const StageSky = ({

    sky,
    stageWidth,
    stageHeight

}) => {
    const { time, season } = sky

    return (
        <DynamicSvg
            className="StageSky"
            viewBoxWidth={stageWidth}
            viewBoxHeight={stageHeight}
        >
            <rect
                className={cx(
                    'StageSkyFilter',
                    'StageSkyFilter__season',
                    `StageSkyFilter__season__${season}`
                )}
                x={0}
                y={0}
                width={stageWidth}
                height={stageHeight}
            />
            <rect
                className={cx(
                    'StageSkyFilter',
                    'StageSkyFilter__time',
                    `StageSkyFilter__time__${time}`
                )}
                x={0}
                y={0}
                width={stageWidth}
                height={stageHeight}
            />
            {/* TODO: Make filter for weather, like clouds and rain. */}
        </DynamicSvg>
    )
}

StageSky.defaultProps = defaultProps
StageSky.propTypes = propTypes

export default StageSky
