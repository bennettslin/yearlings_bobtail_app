import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Missionary = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Missionary'
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
                    'Missionary'
                )}
            </text>
        </Svg>
    )
}

Missionary.propTypes = propTypes

export default Missionary
