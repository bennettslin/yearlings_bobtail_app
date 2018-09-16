import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartExteriorLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartExteriorLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'GoKartExteriorLeft'
                )}
            </text>
        </Svg>
    )
}

GoKartExteriorLeft.propTypes = propTypes;

export default GoKartExteriorLeft
