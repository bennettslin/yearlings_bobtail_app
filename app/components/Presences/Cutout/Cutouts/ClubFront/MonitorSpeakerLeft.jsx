import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MonitorSpeakerLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'MonitorSpeakerLeft',
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
                    'MonitorSpeakerLeft'
                )}
            </text>
        </Svg>
    )
}

MonitorSpeakerLeft.propTypes = propTypes;

export default MonitorSpeakerLeft
