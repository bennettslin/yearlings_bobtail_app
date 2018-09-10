import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartInteriorLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartInteriorLeft',
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
                    'GoKartInteriorLeft'
                )}
            </text>
        </Svg>
    )
}

GoKartInteriorLeft.propTypes = propTypes;

export default GoKartInteriorLeft
