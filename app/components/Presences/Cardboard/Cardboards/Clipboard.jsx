import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Clipboard = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Clipboard',
                className
            )}
        >
            <rect
                className={cx(
                    'Cardboard__temporaryRect'
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
                    'Clipboard'
                )}
            </text>
        </Svg>
    )
}

Clipboard.propTypes = propTypes

export default Clipboard
