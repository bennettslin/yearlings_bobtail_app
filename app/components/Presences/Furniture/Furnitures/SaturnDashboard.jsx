import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SaturnDashboard = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SaturnDashboard',
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
                    'SaturnDashboard'
                )}
            </text>
        </Svg>
    )
}

SaturnDashboard.propTypes = propTypes;

export default SaturnDashboard
