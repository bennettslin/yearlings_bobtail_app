import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaThoughts = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CinemaThoughts',
                className
            )}
        >
            <rect
                className={cx(
                    'Bubble__temporaryRect'
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
                    'CinemaThoughts'
                )}
            </text>
        </Svg>
    )
}

CinemaThoughts.propTypes = propTypes;

export default CinemaThoughts
