import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShoppingCart = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ShoppingCart',
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
                    'ShoppingCart'
                )}
            </text>
        </Svg>
    )
}

ShoppingCart.propTypes = propTypes;

export default ShoppingCart
