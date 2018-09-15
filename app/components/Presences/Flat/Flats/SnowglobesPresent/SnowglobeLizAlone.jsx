import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeLizAlone = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeLizAlone',
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
                    'SnowglobeLizAlone'
                )}
            </text>
        </Svg>
    )
}

SnowglobeLizAlone.propTypes = propTypes;

export default SnowglobeLizAlone
