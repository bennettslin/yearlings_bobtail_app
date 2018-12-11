import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WallSpeakerRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'WallSpeakerRight',
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
                    'WallSpeakerRight'
                )}
            </text>
        </Svg>
    )
}

WallSpeakerRight.propTypes = propTypes

export default WallSpeakerRight
