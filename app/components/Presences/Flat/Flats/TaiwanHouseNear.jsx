import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const TaiwanHouseNear = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TaiwanHouseNear',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'TaiwanHouseNear'
                )}
            </text>
        </Svg>
    )
}

TaiwanHouseNear.propTypes = propTypes

export default TaiwanHouseNear
