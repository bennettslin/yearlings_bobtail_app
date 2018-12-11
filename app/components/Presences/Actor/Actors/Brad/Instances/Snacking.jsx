import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Snacking = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Snacking'
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
                    'Snacking'
                )}
            </text>
        </Svg>
    )
}

Snacking.propTypes = propTypes

export default Snacking
