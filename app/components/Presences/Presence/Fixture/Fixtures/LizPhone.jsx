import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizPhone = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizPhone',
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
                    'LizPhone'
                )}
            </text>
        </Svg>
    )
}

LizPhone.propTypes = propTypes;

export default LizPhone
