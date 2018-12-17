import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DeathbedThoughtPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'DeathbedThoughtPanel',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'DeathbedThoughtPanel'
                )}
            </text>
        </Svg>
    )
}

DeathbedThoughtPanel.propTypes = propTypes

export default DeathbedThoughtPanel
