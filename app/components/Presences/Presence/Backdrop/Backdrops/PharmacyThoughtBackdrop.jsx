import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PharmacyThoughtBackdrop = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PharmacyThoughtBackdrop',
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
                    'PharmacyThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

PharmacyThoughtBackdrop.propTypes = propTypes

export default PharmacyThoughtBackdrop
