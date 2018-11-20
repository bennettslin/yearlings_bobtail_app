import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizGateOutside = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizGateOutside',
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
                    'LizGateOutside'
                )}
            </text>
        </Svg>
    )
}

LizGateOutside.propTypes = propTypes

export default LizGateOutside
