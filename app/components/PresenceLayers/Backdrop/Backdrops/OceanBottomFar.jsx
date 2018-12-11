import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanBottomFar = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OceanBottomFar',
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
                    'OceanBottomFar'
                )}
            </text>
        </Svg>
    )
}

OceanBottomFar.propTypes = propTypes

export default OceanBottomFar
