import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PlaygroundBall = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PlaygroundBall',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'PlaygroundBall'
                )}
            </text>
        </Svg>
    )
}

PlaygroundBall.propTypes = propTypes

export default PlaygroundBall
