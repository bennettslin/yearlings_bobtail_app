import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CaptainBedPillowBlanket = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CaptainBedPillowBlanket',
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
                    'CaptainBedPillowBlanket'
                )}
            </text>
        </Svg>
    )
}

CaptainBedPillowBlanket.propTypes = propTypes

export default CaptainBedPillowBlanket
