import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const HospitalPillow = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'HospitalPillow',
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
                    'HospitalPillow'
                )}
            </text>
        </Svg>
    )
}

HospitalPillow.propTypes = propTypes

export default HospitalPillow
