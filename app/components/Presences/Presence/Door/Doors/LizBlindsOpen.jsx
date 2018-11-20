import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizBlindsOpen = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizBlindsOpen',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'LizBlindsOpen'
                )}
            </text>
        </Svg>
    )
}

LizBlindsOpen.propTypes = propTypes;

export default LizBlindsOpen
