import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const HowieFridge = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'HowieFridge',
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
                    'HowieFridge'
                )}
            </text>
        </Svg>
    )
}

HowieFridge.propTypes = propTypes

export default HowieFridge
