import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeTetherball = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeTetherball',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'SnowglobeTetherball'
                )}
            </text>
        </Svg>
    )
}

SnowglobeTetherball.propTypes = propTypes;

export default SnowglobeTetherball
