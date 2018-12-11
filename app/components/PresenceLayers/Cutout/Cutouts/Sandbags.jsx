import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Sandbags = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Sandbags',
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
                    'Sandbags'
                )}
            </text>
        </Svg>
    )
}

Sandbags.propTypes = propTypes

export default Sandbags
