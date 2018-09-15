import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartSeatRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartSeatRight',
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
                    'GoKartSeatRight'
                )}
            </text>
        </Svg>
    )
}

GoKartSeatRight.propTypes = propTypes;

export default GoKartSeatRight
