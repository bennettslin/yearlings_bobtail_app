import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WaitingArmchair = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WaitingArmchair',
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
                    'WaitingArmchair'
                )}
            </text>
        </Svg>
    )
}

WaitingArmchair.propTypes = propTypes

export default WaitingArmchair
