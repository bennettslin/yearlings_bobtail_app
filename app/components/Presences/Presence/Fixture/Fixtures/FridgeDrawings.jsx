import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FridgeDrawings = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'FridgeDrawings',
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
                    'FridgeDrawings'
                )}
            </text>
        </Svg>
    )
}

FridgeDrawings.propTypes = propTypes

export default FridgeDrawings
