import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MonitorSpeakerRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'MonitorSpeakerRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'MonitorSpeakerRight'
                )}
            </text>
        </Svg>
    )
}

MonitorSpeakerRight.propTypes = propTypes;

export default MonitorSpeakerRight
