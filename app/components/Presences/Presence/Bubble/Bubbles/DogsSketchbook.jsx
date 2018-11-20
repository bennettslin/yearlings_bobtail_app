import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DogsSketchbook = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'DogsSketchbook',
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
                    'DogsSketchbook'
                )}
            </text>
        </Svg>
    )
}

DogsSketchbook.propTypes = propTypes;

export default DogsSketchbook
