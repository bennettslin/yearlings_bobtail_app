import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Buoy = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Buoy',
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
                    'Buoy'
                )}
            </text>
        </Svg>
    )
}

Buoy.propTypes = propTypes;

export default Buoy
