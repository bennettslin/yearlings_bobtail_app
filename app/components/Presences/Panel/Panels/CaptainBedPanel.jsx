import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CaptainBedPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CaptainBedPanel',
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
                    'CaptainBedPanel'
                )}
            </text>
        </Svg>
    )
}

CaptainBedPanel.propTypes = propTypes

export default CaptainBedPanel
