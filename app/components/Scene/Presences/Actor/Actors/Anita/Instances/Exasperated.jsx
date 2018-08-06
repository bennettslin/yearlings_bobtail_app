import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Exasperated = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                className,
                'Exasperated'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'Exasperated'
                )}
            </text>
        </g>
    )
}

Exasperated.propTypes = propTypes;

export default Exasperated
