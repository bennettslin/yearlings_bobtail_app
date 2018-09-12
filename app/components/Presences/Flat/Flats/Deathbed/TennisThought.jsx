import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TennisThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TennisThought',
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
                    'TennisThought'
                )}
            </text>
        </Svg>
    )
}

TennisThought.propTypes = propTypes;

export default TennisThought
