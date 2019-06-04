import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizBedPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizBedPanel',
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
                    'LizBedPanel'
                )}
            </text>
        </Svg>
    )
}

LizBedPanel.propTypes = propTypes

export default LizBedPanel
