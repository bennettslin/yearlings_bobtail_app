import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const HospitalBedPanel = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'HospitalBedPanel',
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
                    'HospitalBedPanel'
                )}
            </text>
        </Svg>
    )
}

HospitalBedPanel.propTypes = propTypes

export default HospitalBedPanel
