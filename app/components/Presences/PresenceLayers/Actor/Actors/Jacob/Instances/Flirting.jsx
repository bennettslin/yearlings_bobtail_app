import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Flirting = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Flirting'
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
                    'Flirting'
                )}
            </text>
        </Svg>
    )
}

Flirting.propTypes = propTypes

export default Flirting
