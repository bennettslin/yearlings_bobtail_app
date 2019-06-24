import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MonitorSide = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MonitorSide',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'MonitorSide'
                )}
            </text>
        </Svg>
    )
}

MonitorSide.propTypes = propTypes

export default MonitorSide
