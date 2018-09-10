import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanDepthsFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanDepthsFront',
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
                    'OceanDepthsFront'
                )}
            </text>
        </Svg>
    )
}

OceanDepthsFront.propTypes = propTypes;

export default OceanDepthsFront
