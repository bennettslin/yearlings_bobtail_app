import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LightSwitch = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LightSwitch',
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
                    'LightSwitch'
                )}
            </text>
        </Svg>
    )
}

LightSwitch.propTypes = propTypes;

export default LightSwitch
