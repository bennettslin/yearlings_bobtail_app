import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BrushingOff = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'BrushingOff'
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
                    'BrushingOff'
                )}
            </text>
        </Svg>
    )
}

BrushingOff.propTypes = propTypes;

export default BrushingOff
