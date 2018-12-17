import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrafficLight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TrafficLight',
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
                    'TrafficLight'
                )}
            </text>
        </Svg>
    )
}

TrafficLight.propTypes = propTypes

export default TrafficLight
