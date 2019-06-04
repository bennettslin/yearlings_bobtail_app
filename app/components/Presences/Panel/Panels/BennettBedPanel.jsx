import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettBedPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettBedPanel',
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
                    'BennettBedPanel'
                )}
            </text>
        </Svg>
    )
}

BennettBedPanel.propTypes = propTypes

export default BennettBedPanel
