import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WallSpeakerLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'WallSpeakerLeft',
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
                    'WallSpeakerLeft'
                )}
            </text>
        </Svg>
    )
}

WallSpeakerLeft.propTypes = propTypes;

export default WallSpeakerLeft
