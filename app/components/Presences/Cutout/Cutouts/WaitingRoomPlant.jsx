import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WaitingRoomPlant = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingRoomPlant',
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
                    'WaitingRoomPlant'
                )}
            </text>
        </Svg>
    )
}

WaitingRoomPlant.propTypes = propTypes

export default WaitingRoomPlant
