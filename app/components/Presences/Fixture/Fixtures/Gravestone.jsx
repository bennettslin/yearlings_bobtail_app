import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Gravestone = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Gravestone',
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
                    'Gravestone'
                )}
            </text>
        </Svg>
    )
}

Gravestone.propTypes = propTypes

export default Gravestone
