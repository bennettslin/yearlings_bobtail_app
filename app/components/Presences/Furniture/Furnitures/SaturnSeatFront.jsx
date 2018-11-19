import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SaturnSeatFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SaturnSeatFront',
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
                    'SaturnSeatFront'
                )}
            </text>
        </Svg>
    )
}

SaturnSeatFront.propTypes = propTypes;

export default SaturnSeatFront
