import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Panicked = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                className,
                'Panicked'
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
                    'Panicked'
                )}
            </text>
        </g>
    )
}

Panicked.propTypes = propTypes;

export default Panicked
