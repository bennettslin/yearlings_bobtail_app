import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FireHydrant = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                'FireHydrant',
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
                    className,
                    'FireHydrant'
                )}
            </text>
        </g>
    )
}

FireHydrant.propTypes = propTypes;

export default FireHydrant
