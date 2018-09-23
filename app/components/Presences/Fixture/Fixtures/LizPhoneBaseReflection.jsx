import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizPhoneBaseReflection = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizPhoneBaseReflection',
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
                    'LizPhoneBaseReflection'
                )}
            </text>
        </Svg>
    )
}

LizPhoneBaseReflection.propTypes = propTypes;

export default LizPhoneBaseReflection
