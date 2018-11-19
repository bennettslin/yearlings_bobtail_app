import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OceanCaveExterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OceanCaveExterior',
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
                    'OceanCaveExterior'
                )}
            </text>
        </Svg>
    )
}

OceanCaveExterior.propTypes = propTypes;

export default OceanCaveExterior
