import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SleepingMat = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SleepingMat',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'SleepingMat'
                )}
            </text>
        </Svg>
    )
}

SleepingMat.propTypes = propTypes;

export default SleepingMat
