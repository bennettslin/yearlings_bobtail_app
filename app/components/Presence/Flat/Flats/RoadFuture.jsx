import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RoadFuture = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'RoadFuture',
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
                    'RoadFuture'
                )}
            </text>
        </Svg>
    )
}

RoadFuture.propTypes = propTypes

export default RoadFuture
