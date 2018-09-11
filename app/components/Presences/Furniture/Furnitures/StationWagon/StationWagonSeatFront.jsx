import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StationWagonSeatFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StationWagonSeatFront',
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
                    'StationWagonSeatFront'
                )}
            </text>
        </Svg>
    )
}

StationWagonSeatFront.propTypes = propTypes;

export default StationWagonSeatFront
