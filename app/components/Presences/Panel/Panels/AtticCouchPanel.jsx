import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AtticCouchPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AtticCouchPanel',
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
                    'AtticCouchPanel'
                )}
            </text>
        </Svg>
    )
}

AtticCouchPanel.propTypes = propTypes

export default AtticCouchPanel
