import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WaitingArmchairArmrestLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingArmchairArmrestLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'WaitingArmchairArmrestLeft'
                )}
            </text>
        </Svg>
    )
}

WaitingArmchairArmrestLeft.propTypes = propTypes

export default WaitingArmchairArmrestLeft
