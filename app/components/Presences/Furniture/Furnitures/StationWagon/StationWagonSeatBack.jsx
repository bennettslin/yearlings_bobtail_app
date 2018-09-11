import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StationWagonSeatBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StationWagonSeatBack',
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
                    'StationWagonSeatBack'
                )}
            </text>
        </Svg>
    )
}

StationWagonSeatBack.propTypes = propTypes;

export default StationWagonSeatBack
