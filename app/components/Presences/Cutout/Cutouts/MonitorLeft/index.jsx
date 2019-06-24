import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MonitorLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MonitorLeft',
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
                    'MonitorLeft'
                )}
            </text>
        </Svg>
    )
}

MonitorLeft.propTypes = propTypes

export default MonitorLeft
