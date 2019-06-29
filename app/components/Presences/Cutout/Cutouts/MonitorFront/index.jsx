import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MonitorFront = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MonitorFront',
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
                    'MonitorFront'
                )}
            </text>
        </Svg>
    )
}

MonitorFront.propTypes = propTypes

export default MonitorFront
