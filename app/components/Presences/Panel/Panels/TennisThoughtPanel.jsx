import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const TennisThoughtPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TennisThoughtPanel',
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
                    'TennisThoughtPanel'
                )}
            </text>
        </Svg>
    )
}

TennisThoughtPanel.propTypes = propTypes

export default TennisThoughtPanel
