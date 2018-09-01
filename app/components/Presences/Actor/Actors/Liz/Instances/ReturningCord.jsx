import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ReturningCord = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'ReturningCord'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'ReturningCord'
                )}
            </text>
        </Svg>
    )
}

ReturningCord.propTypes = propTypes;

export default ReturningCord
