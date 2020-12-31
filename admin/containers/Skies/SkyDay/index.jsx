import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Sky from '../Sky'
import {
    TIME_TWILIGHT,
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    TIME_EVENING,
    TIME_NIGHT,
} from '../../../../app/constants/scene/sky'

const SkyDay = ({ sceneSeason }) => (
    <div className={cx(
        'SkyDay',
        'fCC'
    )}>
        <Sky {...{ sceneSkyTime: TIME_TWILIGHT, sceneSeason }} />
        <Sky {...{ sceneSkyTime: TIME_DAWN, sceneSeason }} />
        <Sky {...{ sceneSkyTime: TIME_MORNING, sceneSeason }} />
        <Sky {...{ sceneSkyTime: TIME_NOON, sceneSeason }} />
        <Sky {...{ sceneSkyTime: TIME_AFTERNOON, sceneSeason }} />
        <Sky {...{ sceneSkyTime: TIME_EVENING, sceneSeason }} />
        <Sky {...{ sceneSkyTime: TIME_NIGHT, sceneSeason }} />
    </div>
)

SkyDay.propTypes = {
    sceneSeason: PropTypes.string.isRequired,
}

export default SkyDay

