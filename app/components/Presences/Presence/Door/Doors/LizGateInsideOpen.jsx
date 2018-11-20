import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizGateInsideOpen = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizGateInsideOpen',
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
                    'LizGateInsideOpen'
                )}
            </text>
        </Svg>
    )
}

LizGateInsideOpen.propTypes = propTypes

export default LizGateInsideOpen
