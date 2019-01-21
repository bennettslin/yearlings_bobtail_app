import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Arrived = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Arrived'
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
                    'Arrived'
                )}
            </text>
        </Svg>
    )
}

Arrived.propTypes = propTypes

export default Arrived
