import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanDepthsBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanDepthsBackdrop',
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
                    'OceanDepthsBackdrop'
                )}
            </text>
        </Svg>
    )
}

OceanDepthsBackdrop.propTypes = propTypes;

export default OceanDepthsBackdrop
