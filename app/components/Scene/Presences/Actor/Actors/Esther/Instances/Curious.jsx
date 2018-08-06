import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Curious = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                className,
                'Curious'
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
                    'Curious'
                )}
            </text>
        </g>
    )
}

Curious.propTypes = propTypes;

export default Curious
