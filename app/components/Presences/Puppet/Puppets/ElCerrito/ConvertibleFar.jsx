import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ConvertibleFar = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ConvertibleFar',
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
                    'ConvertibleFar'
                )}
            </text>
        </Svg>
    )
}

ConvertibleFar.propTypes = propTypes;

export default ConvertibleFar
