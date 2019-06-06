import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizBlanketPile = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizBlanketPile',
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
                    'LizBlanketPile'
                )}
            </text>
        </Svg>
    )
}

LizBlanketPile.propTypes = propTypes

export default LizBlanketPile
