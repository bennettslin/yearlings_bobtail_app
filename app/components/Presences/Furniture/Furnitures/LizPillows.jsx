import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizPillows = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizPillows',
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
                    'LizPillows'
                )}
            </text>
        </Svg>
    )
}

LizPillows.propTypes = propTypes;

export default LizPillows
