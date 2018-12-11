import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MonitorSpeakerSide = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MonitorSpeakerSide',
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
                    'MonitorSpeakerSide'
                )}
            </text>
        </Svg>
    )
}

MonitorSpeakerSide.propTypes = propTypes

export default MonitorSpeakerSide
