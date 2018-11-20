import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TogetherSketchbook = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TogetherSketchbook',
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
                    'TogetherSketchbook'
                )}
            </text>
        </Svg>
    )
}

TogetherSketchbook.propTypes = propTypes

export default TogetherSketchbook
