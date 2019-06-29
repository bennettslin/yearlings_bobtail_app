import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const WallSpeakerFront = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WallSpeakerFront',
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
                    'WallSpeakerFront'
                )}
            </text>
        </Svg>
    )
}

WallSpeakerFront.propTypes = propTypes

export default WallSpeakerFront
