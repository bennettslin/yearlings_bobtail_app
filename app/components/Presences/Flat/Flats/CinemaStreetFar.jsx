import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaStreetFar = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CinemaStreetFar',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'CinemaStreetFar'
                )}
            </text>
        </Svg>
    )
}

CinemaStreetFar.propTypes = propTypes;

export default CinemaStreetFar
