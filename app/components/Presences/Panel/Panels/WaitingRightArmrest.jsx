import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WaitingRightArmrest = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingRightArmrest',
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
                    'WaitingRightArmrest'
                )}
            </text>
        </Svg>
    )
}

WaitingRightArmrest.propTypes = propTypes

export default WaitingRightArmrest
