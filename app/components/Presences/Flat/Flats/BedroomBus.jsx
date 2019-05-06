import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BedroomBus = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BedroomBus',
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
                    'BedroomBus'
                )}
            </text>
        </Svg>
    )
}

BedroomBus.propTypes = propTypes

export default BedroomBus
