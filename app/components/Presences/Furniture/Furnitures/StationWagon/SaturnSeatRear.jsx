import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SaturnSeatRear = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SaturnSeatRear',
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
                    'SaturnSeatRear'
                )}
            </text>
        </Svg>
    )
}

SaturnSeatRear.propTypes = propTypes;

export default SaturnSeatRear
