import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SchoolbusThoughtBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SchoolbusThoughtBackdrop',
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
                    'SchoolbusThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

SchoolbusThoughtBackdrop.propTypes = propTypes;

export default SchoolbusThoughtBackdrop
