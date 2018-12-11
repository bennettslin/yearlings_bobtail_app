import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysThoughtBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'VanNuysThoughtBackdrop',
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
                    'VanNuysThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

VanNuysThoughtBackdrop.propTypes = propTypes

export default VanNuysThoughtBackdrop
