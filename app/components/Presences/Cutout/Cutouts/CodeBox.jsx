import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CodeBox = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CodeBox',
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
                    'CodeBox'
                )}
            </text>
        </Svg>
    )
}

CodeBox.propTypes = propTypes

export default CodeBox
