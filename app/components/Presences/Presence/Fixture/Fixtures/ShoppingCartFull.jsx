import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShoppingCartFull = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ShoppingCartFull',
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
                    'ShoppingCartFull'
                )}
            </text>
        </Svg>
    )
}

ShoppingCartFull.propTypes = propTypes;

export default ShoppingCartFull
