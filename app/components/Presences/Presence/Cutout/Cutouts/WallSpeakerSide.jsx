import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const WallSpeakerSide = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'WallSpeakerSide',
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
                    'WallSpeakerSide'
                )}
            </text>
        </Svg>
    )
}

WallSpeakerSide.propTypes = propTypes;

export default WallSpeakerSide
