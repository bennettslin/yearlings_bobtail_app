import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WaitingLeftArmrest = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingLeftArmrest',
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
                    'WaitingLeftArmrest'
                )}
            </text>
        </Svg>
    )
}

WaitingLeftArmrest.propTypes = propTypes

export default WaitingLeftArmrest
