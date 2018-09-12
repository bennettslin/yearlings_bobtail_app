import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeLizBlinds = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeLizBlinds',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'SnowglobeLizBlinds'
                )}
            </text>
        </Svg>
    )
}

SnowglobeLizBlinds.propTypes = propTypes;

export default SnowglobeLizBlinds
