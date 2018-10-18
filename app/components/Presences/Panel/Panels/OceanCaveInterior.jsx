import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanCaveInterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanCaveInterior',
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
                    'OceanCaveInterior'
                )}
            </text>
        </Svg>
    )
}

OceanCaveInterior.propTypes = propTypes;

export default OceanCaveInterior
