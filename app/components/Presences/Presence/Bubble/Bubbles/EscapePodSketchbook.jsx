import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const EscapePodSketchbook = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'EscapePodSketchbook',
                className
            )}
        >
            <rect
                className={cx(
                    'Bubble__temporaryRect'
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
                    'EscapePodSketchbook'
                )}
            </text>
        </Svg>
    )
}

EscapePodSketchbook.propTypes = propTypes

export default EscapePodSketchbook
