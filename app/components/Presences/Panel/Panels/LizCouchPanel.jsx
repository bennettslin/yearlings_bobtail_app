import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizCouchPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizCouchPanel',
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
                    'LizCouchPanel'
                )}
            </text>
        </Svg>
    )
}

LizCouchPanel.propTypes = propTypes

export default LizCouchPanel
