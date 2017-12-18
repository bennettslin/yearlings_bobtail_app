// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

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

const propTypes = {
    sky: PropTypes.shape({
        time: PropTypes.string.isRequired,
        season: PropTypes.string.isRequired
    }).isRequired
}

const StageSkyField = ({
    sky
}) => {
    const { time, season } = sky

    return (
        <div className="stage-sky-field">
            <div
                className={classnames(
                    'filter',
                    'season-filter',
                    { 'none': season === SKY_NO_SEASON,
                    'spring': season === SKY_SPRING,
                    'summer': season === SKY_SUMMER,
                    'autumn': season === SKY_AUTUMN,
                    'winter': season === SKY_WINTER }
                )}
            />
            <div
                className={classnames(
                    'filter',
                    'time-filter',
                    { 'none': time === SKY_NO_TIME,
                    'morning': time === SKY_MORNING,
                    'noon': time === SKY_NOON,
                    'afternoon': time === SKY_AFTERNOON,
                    'evening': time === SKY_EVENING,
                    'night': time === SKY_NIGHT }
                )}
            />
        </div>
    )
}

StageSkyField.propTypes = propTypes

export default StageSkyField
