import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const IronGateLow = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'IronGateLow',
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
                    'IronGateLow'
                )}
            </text>
        </Svg>
    )
}

IronGateLow.propTypes = propTypes

export default IronGateLow
