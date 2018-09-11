import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizNightstand = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizNightstand',
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
                    'LizNightstand'
                )}
            </text>
        </Svg>
    )
}

LizNightstand.propTypes = propTypes;

export default LizNightstand
