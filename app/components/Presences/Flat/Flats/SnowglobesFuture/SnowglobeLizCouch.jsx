import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeLizCouch = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeLizCouch',
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
                    'SnowglobeLizCouch'
                )}
            </text>
        </Svg>
    )
}

SnowglobeLizCouch.propTypes = propTypes;

export default SnowglobeLizCouch
