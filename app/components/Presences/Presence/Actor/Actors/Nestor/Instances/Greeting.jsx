import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Greeting = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Greeting'
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
                    'Greeting'
                )}
            </text>
        </Svg>
    )
}

Greeting.propTypes = propTypes

export default Greeting
