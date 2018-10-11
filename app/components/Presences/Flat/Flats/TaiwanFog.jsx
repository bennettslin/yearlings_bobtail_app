import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanFog = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TaiwanFog',
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
                    'TaiwanFog'
                )}
            </text>
        </Svg>
    )
}

TaiwanFog.propTypes = propTypes;

export default TaiwanFog
