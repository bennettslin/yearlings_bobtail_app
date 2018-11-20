import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SteamTunnel = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SteamTunnel'
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
                    'SteamTunnel'
                )}
            </text>
        </Svg>
    )
}

SteamTunnel.propTypes = propTypes;

export default SteamTunnel
