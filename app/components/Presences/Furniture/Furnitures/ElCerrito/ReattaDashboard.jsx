import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ReattaDashboard = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ReattaDashboard',
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
                    'ReattaDashboard'
                )}
            </text>
        </Svg>
    )
}

ReattaDashboard.propTypes = propTypes;

export default ReattaDashboard
