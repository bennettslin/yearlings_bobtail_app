import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SaturnInterior = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'SaturnInterior',
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
                    'SaturnInterior'
                )}
            </text>
        </Svg>
    )
}

SaturnInterior.propTypes = propTypes

export default SaturnInterior
