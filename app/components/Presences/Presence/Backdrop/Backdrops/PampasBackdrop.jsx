import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PampasBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PampasBackdrop',
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
                    'PampasBackdrop'
                )}
            </text>
        </Svg>
    )
}

PampasBackdrop.propTypes = propTypes

export default PampasBackdrop
