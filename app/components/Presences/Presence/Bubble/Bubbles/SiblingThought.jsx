import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SiblingThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SiblingThought',
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
                    'SiblingThought'
                )}
            </text>
        </Svg>
    )
}

SiblingThought.propTypes = propTypes;

export default SiblingThought
