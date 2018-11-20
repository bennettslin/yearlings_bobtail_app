import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Sobbing = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Sobbing'
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
                    'Sobbing'
                )}
            </text>
        </Svg>
    )
}

Sobbing.propTypes = propTypes

export default Sobbing
