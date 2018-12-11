import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Ducking = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Ducking'
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
                    'Ducking'
                )}
            </text>
        </Svg>
    )
}

Ducking.propTypes = propTypes

export default Ducking
