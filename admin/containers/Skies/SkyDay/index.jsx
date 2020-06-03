import React, { PureComponent } from 'react'
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

class SkyDay extends PureComponent {

    static propTypes = {
        // From parent.
        sceneSkySeason: PropTypes.string.isRequired
    }

    render() {
        const { sceneSkySeason } = this.props

        return (
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
    }
}

export default SkyDay

