import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettCushions = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettCushions',
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
                    'BennettCushions'
                )}
            </text>
        </Svg>
    )
}

BennettCushions.propTypes = propTypes

export default BennettCushions
