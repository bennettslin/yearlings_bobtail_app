import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const HospitalMattress = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'HospitalMattress',
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
                    'HospitalMattress'
                )}
            </text>
        </Svg>
    )
}

HospitalMattress.propTypes = propTypes

export default HospitalMattress
