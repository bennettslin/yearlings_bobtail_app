import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WaitingRoomDoor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'WaitingRoomDoor',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'WaitingRoomDoor'
                )}
            </text>
        </Svg>
    )
}

WaitingRoomDoor.propTypes = propTypes;

export default WaitingRoomDoor
