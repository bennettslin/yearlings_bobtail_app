import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const RedEnvelopeMoney = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'RedEnvelopeMoney',
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
                    'RedEnvelopeMoney'
                )}
            </text>
        </Svg>
    )
}

RedEnvelopeMoney.propTypes = propTypes

export default RedEnvelopeMoney
