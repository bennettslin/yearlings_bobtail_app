import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Keyboard = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Keyboard',
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
                    'Keyboard'
                )}
            </text>
        </Svg>
    )
}

Keyboard.propTypes = propTypes;

export default Keyboard
