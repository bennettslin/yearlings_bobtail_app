import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrayRack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TrayRack',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'TrayRack'
                )}
            </text>
        </Svg>
    )
}

TrayRack.propTypes = propTypes;

export default TrayRack
