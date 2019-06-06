import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizPillowsPileReflection = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizPillowsPileReflection',
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
                    'LizPillowsPileReflection'
                )}
            </text>
        </Svg>
    )
}

LizPillowsPileReflection.propTypes = propTypes

export default LizPillowsPileReflection
