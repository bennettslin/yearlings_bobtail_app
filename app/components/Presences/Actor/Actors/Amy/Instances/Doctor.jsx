import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Doctor = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Doctor'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'Doctor'
                )}
            </text>
        </Svg>
    )
}

Doctor.propTypes = propTypes

export default Doctor
