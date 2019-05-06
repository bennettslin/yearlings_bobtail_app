import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BedroomSiren = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BedroomSiren',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'BedroomSiren'
                )}
            </text>
        </Svg>
    )
}

BedroomSiren.propTypes = propTypes

export default BedroomSiren
