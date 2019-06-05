import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WaitingArmchairPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingArmchairPanel',
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
                    'WaitingArmchairPanel'
                )}
            </text>
        </Svg>
    )
}

WaitingArmchairPanel.propTypes = propTypes

export default WaitingArmchairPanel
