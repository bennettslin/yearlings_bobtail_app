import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobesPresent = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobesPresent',
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
                    'SnowglobesPresent'
                )}
            </text>
        </Svg>
    )
}

SnowglobesPresent.propTypes = propTypes;

export default SnowglobesPresent
