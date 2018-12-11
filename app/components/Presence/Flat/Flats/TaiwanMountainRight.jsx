import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanMountainRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TaiwanMountainRight',
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
                    'TaiwanMountainRight'
                )}
            </text>
        </Svg>
    )
}

TaiwanMountainRight.propTypes = propTypes

export default TaiwanMountainRight
