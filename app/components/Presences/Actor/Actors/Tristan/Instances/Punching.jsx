import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Punching = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Punching'
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
                    'Punching'
                )}
            </text>
        </Svg>
    )
}

Punching.propTypes = propTypes

export default Punching
