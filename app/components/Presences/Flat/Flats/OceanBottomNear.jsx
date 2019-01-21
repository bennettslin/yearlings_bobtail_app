import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const OceanBottomNear = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OceanBottomNear',
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
                    'OceanBottomNear'
                )}
            </text>
        </Svg>
    )
}

OceanBottomNear.propTypes = propTypes

export default OceanBottomNear
