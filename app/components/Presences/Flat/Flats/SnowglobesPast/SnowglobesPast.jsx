import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobesPast = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobesPast',
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
                    'SnowglobesPast'
                )}
            </text>
        </Svg>
    )
}

SnowglobesPast.propTypes = propTypes;

export default SnowglobesPast
