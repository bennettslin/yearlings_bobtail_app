import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const UsherWaiting = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'UsherWaiting'
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
                    'UsherWaiting'
                )}
            </text>
        </Svg>
    )
}

UsherWaiting.propTypes = propTypes

export default UsherWaiting
