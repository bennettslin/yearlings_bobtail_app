import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SafewayBag = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'SafewayBag',
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
                    'SafewayBag'
                )}
            </text>
        </Svg>
    )
}

SafewayBag.propTypes = propTypes

export default SafewayBag
