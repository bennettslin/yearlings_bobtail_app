import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TarpitThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TarpitThought',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'TarpitThought'
                )}
            </text>
        </Svg>
    )
}

TarpitThought.propTypes = propTypes;

export default TarpitThought
