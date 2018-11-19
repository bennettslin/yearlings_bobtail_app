import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizPillowsReflection = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizPillowsReflection',
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
                    'LizPillowsReflection'
                )}
            </text>
        </Svg>
    )
}

LizPillowsReflection.propTypes = propTypes;

export default LizPillowsReflection
