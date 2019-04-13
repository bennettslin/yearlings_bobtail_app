import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const TaiwanPillow = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TaiwanPillow',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'TaiwanPillow'
                )}
            </text>
        </Svg>
    )
}

TaiwanPillow.propTypes = propTypes

export default TaiwanPillow
