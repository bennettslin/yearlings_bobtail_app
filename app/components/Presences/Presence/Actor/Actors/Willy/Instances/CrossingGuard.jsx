import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CrossingGuard = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CrossingGuard'
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
                    'CrossingGuard'
                )}
            </text>
        </Svg>
    )
}

CrossingGuard.propTypes = propTypes

export default CrossingGuard
