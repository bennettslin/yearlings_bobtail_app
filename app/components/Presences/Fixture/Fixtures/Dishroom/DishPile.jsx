import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DishPile = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'DishPile',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'DishPile'
                )}
            </text>
        </Svg>
    )
}

DishPile.propTypes = propTypes;

export default DishPile
