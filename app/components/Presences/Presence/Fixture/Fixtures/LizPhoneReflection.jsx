import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizPhoneReflection = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizPhoneReflection',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'LizPhoneReflection'
                )}
            </text>
        </Svg>
    )
}

LizPhoneReflection.propTypes = propTypes

export default LizPhoneReflection
