import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettCouchPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettCouchPanel',
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
                    'BennettCouchPanel'
                )}
            </text>
        </Svg>
    )
}

BennettCouchPanel.propTypes = propTypes

export default BennettCouchPanel
