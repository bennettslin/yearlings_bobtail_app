import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Quipping = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Quipping'
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
                    'Quipping'
                )}
            </text>
        </Svg>
    )
}

Quipping.propTypes = propTypes

export default Quipping
