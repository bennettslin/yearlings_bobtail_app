import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WeddingBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WeddingBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'WeddingBackdrop'
                )}
            </text>
        </Svg>
    )
}

WeddingBackdrop.propTypes = propTypes

export default WeddingBackdrop
