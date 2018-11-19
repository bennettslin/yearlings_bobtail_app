import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettTaiwanGate = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BennettTaiwanGate',
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
                    'BennettTaiwanGate'
                )}
            </text>
        </Svg>
    )
}

BennettTaiwanGate.propTypes = propTypes;

export default BennettTaiwanGate
