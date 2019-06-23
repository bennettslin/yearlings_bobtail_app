import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const OdinTaiwanGate = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OdinTaiwanGate',
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
                    'OdinTaiwanGate'
                )}
            </text>
        </Svg>
    )
}

OdinTaiwanGate.propTypes = propTypes

export default OdinTaiwanGate
