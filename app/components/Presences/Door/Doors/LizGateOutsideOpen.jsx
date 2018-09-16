import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizGateOutsideOpen = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizGateOutsideOpen',
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
                    'LizGateOutsideOpen'
                )}
            </text>
        </Svg>
    )
}

LizGateOutsideOpen.propTypes = propTypes;

export default LizGateOutsideOpen
