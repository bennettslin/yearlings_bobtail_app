import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrollShadowLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TrollShadowLeft',
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
                    'TrollShadowLeft'
                )}
            </text>
        </Svg>
    )
}

TrollShadowLeft.propTypes = propTypes;

export default TrollShadowLeft
