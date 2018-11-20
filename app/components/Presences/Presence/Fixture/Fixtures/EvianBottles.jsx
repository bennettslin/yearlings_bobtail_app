import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const EvianBottles = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'EvianBottles',
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
                    'EvianBottles'
                )}
            </text>
        </Svg>
    )
}

EvianBottles.propTypes = propTypes

export default EvianBottles
