import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoHouseLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'NohoHouseLeft',
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
                    'NohoHouseLeft'
                )}
            </text>
        </Svg>
    )
}

NohoHouseLeft.propTypes = propTypes

export default NohoHouseLeft
