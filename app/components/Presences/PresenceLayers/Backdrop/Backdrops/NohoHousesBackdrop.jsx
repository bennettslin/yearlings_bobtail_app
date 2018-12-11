import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoHousesBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'NohoHousesBackdrop',
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
                    'NohoHousesBackdrop'
                )}
            </text>
        </Svg>
    )
}

NohoHousesBackdrop.propTypes = propTypes

export default NohoHousesBackdrop
