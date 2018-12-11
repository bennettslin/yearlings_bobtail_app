import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanBottomMiddle = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OceanBottomMiddle',
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
                    'OceanBottomMiddle'
                )}
            </text>
        </Svg>
    )
}

OceanBottomMiddle.propTypes = propTypes

export default OceanBottomMiddle
