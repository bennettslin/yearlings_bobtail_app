import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartSeatLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartSeatLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'GoKartSeatLeft'
                )}
            </text>
        </Svg>
    )
}

GoKartSeatLeft.propTypes = propTypes;

export default GoKartSeatLeft
