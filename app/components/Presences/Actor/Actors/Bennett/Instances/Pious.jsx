import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Pious = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Pious'
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
                    'Pious'
                )}
            </text>
        </Svg>
    )
}

Pious.propTypes = propTypes

export default Pious
