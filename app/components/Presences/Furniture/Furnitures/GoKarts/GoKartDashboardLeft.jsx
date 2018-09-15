import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartDashboardLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartDashboardLeft',
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
                    'GoKartDashboardLeft'
                )}
            </text>
        </Svg>
    )
}

GoKartDashboardLeft.propTypes = propTypes;

export default GoKartDashboardLeft
