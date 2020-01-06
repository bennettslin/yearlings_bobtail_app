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
} from '../../../../app/scene/sky/keys'

class SkyDay extends PureComponent {

    static propTypes = {
        // From parent.
        sceneSeason: PropTypes.string.isRequired
    }

    render() {
        const { sceneSeason } = this.props

        return (
            <div className={cx(
                'SkyDay',
                'flexCentreContainer'
            )}>
                <Sky {...{ sceneTime: TIME_TWILIGHT, sceneSeason }} />
                <Sky {...{ sceneTime: TIME_DAWN, sceneSeason }} />
                <Sky {...{ sceneTime: TIME_MORNING, sceneSeason }} />
                <Sky {...{ sceneTime: TIME_NOON, sceneSeason }} />
                <Sky {...{ sceneTime: TIME_AFTERNOON, sceneSeason }} />
                <Sky {...{ sceneTime: TIME_EVENING, sceneSeason }} />
                <Sky {...{ sceneTime: TIME_NIGHT, sceneSeason }} />
            </div>
        )
    }
}

export default SkyDay

