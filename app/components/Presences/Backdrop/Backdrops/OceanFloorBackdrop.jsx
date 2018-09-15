import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanFloorBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanFloorBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'OceanFloorBackdrop'
                )}
            </text>
        </Svg>
    )
}

OceanFloorBackdrop.propTypes = propTypes;

export default OceanFloorBackdrop
