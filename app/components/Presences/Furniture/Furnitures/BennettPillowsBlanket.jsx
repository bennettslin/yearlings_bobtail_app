import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettPillowsBlanket = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettPillowsBlanket',
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
                    'BennettPillowsBlanket'
                )}
            </text>
        </Svg>
    )
}

BennettPillowsBlanket.propTypes = propTypes

export default BennettPillowsBlanket
