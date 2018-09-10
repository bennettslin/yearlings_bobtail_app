import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanWaves = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanWaves',
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
                    'OceanWaves'
                )}
            </text>
        </Svg>
    )
}

OceanWaves.propTypes = propTypes;

export default OceanWaves
