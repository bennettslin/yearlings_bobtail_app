import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Peacock = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Peacock',
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
                    'Peacock'
                )}
            </text>
        </Svg>
    )
}

Peacock.propTypes = propTypes;

export default Peacock
