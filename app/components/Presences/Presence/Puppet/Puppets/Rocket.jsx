import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Rocket = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Rocket',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'Rocket'
                )}
            </text>
        </Svg>
    )
}

Rocket.propTypes = propTypes;

export default Rocket
