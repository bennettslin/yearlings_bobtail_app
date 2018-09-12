import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizDoor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizDoor',
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
                    'LizDoor'
                )}
            </text>
        </Svg>
    )
}

LizDoor.propTypes = propTypes;

export default LizDoor
