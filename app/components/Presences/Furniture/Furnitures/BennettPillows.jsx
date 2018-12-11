import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettPillows = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettPillows',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'BennettPillows'
                )}
            </text>
        </Svg>
    )
}

BennettPillows.propTypes = propTypes

export default BennettPillows
