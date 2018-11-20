import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElTorito = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ElTorito'
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
                    'ElTorito'
                )}
            </text>
        </Svg>
    )
}

ElTorito.propTypes = propTypes

export default ElTorito
