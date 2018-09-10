import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MicrophoneStand = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'MicrophoneStand',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'MicrophoneStand'
                )}
            </text>
        </Svg>
    )
}

MicrophoneStand.propTypes = propTypes;

export default MicrophoneStand
