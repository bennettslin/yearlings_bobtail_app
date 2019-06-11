import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettBlanket = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettBlanket',
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
                    'BennettBlanket'
                )}
            </text>
        </Svg>
    )
}

BennettBlanket.propTypes = propTypes

export default BennettBlanket
