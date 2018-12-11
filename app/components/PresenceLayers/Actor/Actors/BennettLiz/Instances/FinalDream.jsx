import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FinalDream = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'FinalDream'
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
                    'FinalDream'
                )}
            </text>
        </Svg>
    )
}

FinalDream.propTypes = propTypes

export default FinalDream
