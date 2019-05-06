import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BedroomFence = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BedroomFence',
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
                    'BedroomFence'
                )}
            </text>
        </Svg>
    )
}

BedroomFence.propTypes = propTypes

export default BedroomFence
