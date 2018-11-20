import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PharmacyAisle = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PharmacyAisle',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'PharmacyAisle'
                )}
            </text>
        </Svg>
    )
}

PharmacyAisle.propTypes = propTypes

export default PharmacyAisle
