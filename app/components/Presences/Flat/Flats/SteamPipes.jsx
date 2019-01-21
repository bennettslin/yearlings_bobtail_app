import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const SteamPipes = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'SteamPipes',
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
                    'SteamPipes'
                )}
            </text>
        </Svg>
    )
}

SteamPipes.propTypes = propTypes

export default SteamPipes
