import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RoadPresent = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'RoadPresent',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'RoadPresent'
                )}
            </text>
        </Svg>
    )
}

RoadPresent.propTypes = propTypes

export default RoadPresent
