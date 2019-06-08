import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const HospitalBed = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'HospitalBed',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'HospitalBed'
                )}
            </text>
        </Svg>
    )
}

HospitalBed.propTypes = propTypes

export default HospitalBed
