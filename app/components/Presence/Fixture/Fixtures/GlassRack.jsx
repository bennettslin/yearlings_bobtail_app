import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GlassRack = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'GlassRack',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'GlassRack'
                )}
            </text>
        </Svg>
    )
}

GlassRack.propTypes = propTypes

export default GlassRack
