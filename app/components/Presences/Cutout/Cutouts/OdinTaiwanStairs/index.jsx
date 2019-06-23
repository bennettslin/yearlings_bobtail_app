import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const OdinTaiwanStairs = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OdinTaiwanStairs',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'OdinTaiwanStairs'
                )}
            </text>
        </Svg>
    )
}

OdinTaiwanStairs.propTypes = propTypes

export default OdinTaiwanStairs
