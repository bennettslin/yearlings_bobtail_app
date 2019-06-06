import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizPillowsPile = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizPillowsPile',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'LizPillowsPile'
                )}
            </text>
        </Svg>
    )
}

LizPillowsPile.propTypes = propTypes

export default LizPillowsPile
