import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanFloorFar = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OceanFloorFar',
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
                    'OceanFloorFar'
                )}
            </text>
        </Svg>
    )
}

OceanFloorFar.propTypes = propTypes

export default OceanFloorFar
