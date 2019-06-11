import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CaptainBedPillow = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CaptainBedPillow',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'CaptainBedPillow'
                )}
            </text>
        </Svg>
    )
}

CaptainBedPillow.propTypes = propTypes

export default CaptainBedPillow
