import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GlassCart = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'GlassCart',
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
                    'GlassCart'
                )}
            </text>
        </Svg>
    )
}

GlassCart.propTypes = propTypes

export default GlassCart
