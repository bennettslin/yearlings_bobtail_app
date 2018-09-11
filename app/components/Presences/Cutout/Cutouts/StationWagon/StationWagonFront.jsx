import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StationWagonFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StationWagonFront',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'StationWagonFront'
                )}
            </text>
        </Svg>
    )
}

StationWagonFront.propTypes = propTypes;

export default StationWagonFront
