import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BasementDoor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BasementDoor',
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
                    'BasementDoor'
                )}
            </text>
        </Svg>
    )
}

BasementDoor.propTypes = propTypes;

export default BasementDoor
