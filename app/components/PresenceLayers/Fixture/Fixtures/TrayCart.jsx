import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrayCart = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TrayCart',
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
                    'TrayCart'
                )}
            </text>
        </Svg>
    )
}

TrayCart.propTypes = propTypes

export default TrayCart
