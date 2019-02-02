import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const HospitalPillowLowered = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'HospitalPillowLowered',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'HospitalPillowLowered'
                )}
            </text>
        </Svg>
    )
}

HospitalPillowLowered.propTypes = propTypes

export default HospitalPillowLowered
