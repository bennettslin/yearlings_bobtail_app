import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PublicNearRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PublicNearRight',
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
                    'PublicNearRight'
                )}
            </text>
        </Svg>
    )
}

PublicNearRight.propTypes = propTypes

export default PublicNearRight
