import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SchoolbusInterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SchoolbusInterior',
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
                    'SchoolbusInterior'
                )}
            </text>
        </Svg>
    )
}

SchoolbusInterior.propTypes = propTypes;

export default SchoolbusInterior
