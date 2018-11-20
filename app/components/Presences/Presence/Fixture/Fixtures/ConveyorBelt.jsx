import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ConveyorBelt = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'ConveyorBelt',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'ConveyorBelt'
                )}
            </text>
        </Svg>
    )
}

ConveyorBelt.propTypes = propTypes

export default ConveyorBelt
