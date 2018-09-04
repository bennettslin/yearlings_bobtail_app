import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CaressingReflection = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CaressingReflection'
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
                    'CaressingReflection'
                )}
            </text>
        </Svg>
    )
}

CaressingReflection.propTypes = propTypes;

export default CaressingReflection
