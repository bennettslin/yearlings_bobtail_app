import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Gate = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Gate'
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
                    'Gate'
                )}
            </text>
        </Svg>
    )
}

Gate.propTypes = propTypes

export default Gate
