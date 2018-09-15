import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SaturnExterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SaturnExterior',
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
                    'SaturnExterior'
                )}
            </text>
        </Svg>
    )
}

SaturnExterior.propTypes = propTypes;

export default SaturnExterior
