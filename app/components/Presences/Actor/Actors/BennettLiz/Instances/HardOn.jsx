import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const HardOn = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'HardOn'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'HardOn'
                )}
            </text>
        </Svg>
    )
}

HardOn.propTypes = propTypes

export default HardOn
