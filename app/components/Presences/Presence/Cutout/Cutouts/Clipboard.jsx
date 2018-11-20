import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Clipboard = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'Clipboard',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
