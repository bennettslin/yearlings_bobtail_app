import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WaitingRoomThoughts = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingRoomThoughts',
                className
            )}
        >
            <rect
                className={cx(
                    'Bubble__temporaryRect'
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
                    'WaitingRoomThoughts'
                )}
            </text>
        </Svg>
    )
}

WaitingRoomThoughts.propTypes = propTypes

export default WaitingRoomThoughts
