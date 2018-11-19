import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartThought',
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
                    'GoKartThought'
                )}
            </text>
        </Svg>
    )
}

GoKartThought.propTypes = propTypes;

export default GoKartThought
