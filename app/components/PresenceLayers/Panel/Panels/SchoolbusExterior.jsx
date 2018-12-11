import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SchoolbusExterior = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'SchoolbusExterior',
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
                    'SchoolbusExterior'
                )}
            </text>
        </Svg>
    )
}

SchoolbusExterior.propTypes = propTypes

export default SchoolbusExterior
