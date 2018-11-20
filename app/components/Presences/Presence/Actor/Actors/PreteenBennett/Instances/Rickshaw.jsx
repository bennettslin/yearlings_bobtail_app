import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Rickshaw = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Rickshaw'
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
                    'Rickshaw'
                )}
            </text>
        </Svg>
    )
}

Rickshaw.propTypes = propTypes

export default Rickshaw
