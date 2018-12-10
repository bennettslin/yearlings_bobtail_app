import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BrushOff = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'BrushOff'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'BrushOff'
                )}
            </text>
        </Svg>
    )
}

BrushOff.propTypes = propTypes

export default BrushOff
