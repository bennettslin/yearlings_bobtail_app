import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizThought = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizThought',
                className
            )}
        >
            <rect
                className={cx(
                    'Bubble__temporaryRect'
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
                    'LizThought'
                )}
            </text>
        </Svg>
    )
}

LizThought.propTypes = propTypes

export default LizThought
