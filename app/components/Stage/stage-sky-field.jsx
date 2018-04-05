// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import { SKY_NO_TIME,
         SKY_MORNING,
         SKY_NOON,
         SKY_AFTERNOON,
         SKY_EVENING,
         SKY_NIGHT,

         SKY_NO_SEASON,
         SKY_SPRING,
         SKY_SUMMER,
         SKY_AUTUMN,
         SKY_WINTER } from '../../constants/stageValues'

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

const StageSkyField = ({

    sky,
    stageWidth,
    stageHeight

}) => {
    const { time, season } = sky

    return (
        <DynamicSvg
            className="stage-sky-field"
            viewBoxWidth={stageWidth}
            viewBoxHeight={stageHeight}
        >
            <rect
                className={cx(
                    'filter',
                    'season-filter',
                    { 'none': season === SKY_NO_SEASON,
                    'spring': season === SKY_SPRING,
                    'summer': season === SKY_SUMMER,
                    'autumn': season === SKY_AUTUMN,
                    'winter': season === SKY_WINTER }
                )}
                x={0}
                y={0}
                width={stageWidth}
                height={stageHeight}
            />
            <rect
                className={cx(
                    'filter',
                    'time-filter',
                    { 'none': time === SKY_NO_TIME,
                    'morning': time === SKY_MORNING,
                    'noon': time === SKY_NOON,
                    'afternoon': time === SKY_AFTERNOON,
                    'evening': time === SKY_EVENING,
                    'night': time === SKY_NIGHT }
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

StageSkyField.defaultProps = defaultProps
StageSkyField.propTypes = propTypes

export default StageSkyField
