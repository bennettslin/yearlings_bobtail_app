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
    TIME_NIGHT
} from '../../../../app/constants/scene/sky'

const SkyDay = ({ sceneSkySeason }) => (
    <div className={cx(
        'SkyDay',
        'fCC'
    )}>
        <Sky {...{ sceneSkyTime: TIME_TWILIGHT, sceneSkySeason }} />
        <Sky {...{ sceneSkyTime: TIME_DAWN, sceneSkySeason }} />
        <Sky {...{ sceneSkyTime: TIME_MORNING, sceneSkySeason }} />
        <Sky {...{ sceneSkyTime: TIME_NOON, sceneSkySeason }} />
        <Sky {...{ sceneSkyTime: TIME_AFTERNOON, sceneSkySeason }} />
        <Sky {...{ sceneSkyTime: TIME_EVENING, sceneSkySeason }} />
        <Sky {...{ sceneSkyTime: TIME_NIGHT, sceneSkySeason }} />
    </div>
)

SkyDay.propTypes = {
    sceneSkySeason: PropTypes.string.isRequired
}

export default SkyDay

