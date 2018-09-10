import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartLeft',
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
                    'GoKartLeft'
                )}
            </text>
        </Svg>
    )
}

GoKartLeft.propTypes = propTypes;

export default GoKartLeft
