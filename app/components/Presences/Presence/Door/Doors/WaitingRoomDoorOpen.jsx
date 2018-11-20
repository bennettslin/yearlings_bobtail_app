import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WaitingRoomDoorOpen = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'WaitingRoomDoorOpen',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'WaitingRoomDoorOpen'
                )}
            </text>
        </Svg>
    )
}

WaitingRoomDoorOpen.propTypes = propTypes

export default WaitingRoomDoorOpen
