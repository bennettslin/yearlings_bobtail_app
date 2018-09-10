import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanDepthsBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanDepthsBack',
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
                    'OceanDepthsBack'
                )}
            </text>
        </Svg>
    )
}

OceanDepthsBack.propTypes = propTypes;

export default OceanDepthsBack
