import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Earth = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Earth',
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
                    'Earth'
                )}
            </text>
        </Svg>
    )
}

Earth.propTypes = propTypes

export default Earth
