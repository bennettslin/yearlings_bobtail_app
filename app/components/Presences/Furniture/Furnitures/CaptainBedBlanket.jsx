import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CaptainBedBlanket = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CaptainBedBlanket',
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
                    'CaptainBedBlanket'
                )}
            </text>
        </Svg>
    )
}

CaptainBedBlanket.propTypes = propTypes

export default CaptainBedBlanket
