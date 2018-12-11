import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TwinStreetlamp = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TwinStreetlamp',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'TwinStreetlamp'
                )}
            </text>
        </Svg>
    )
}

TwinStreetlamp.propTypes = propTypes

export default TwinStreetlamp
