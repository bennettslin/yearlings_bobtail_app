import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const
    LOGUE_NEXT_ICON = ({
        className
    }) => (
        <circle
            {...{
                className,
                cx: 50,
                cy: 50,
                r: 50
            }}
        />
    ),
    SONG_NEXT_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 0,
                y: 0,
                width: 100,
                height: 100
            }}
        />
    ),
    AUDIO_NEXT_MAP = {
        [true]: LOGUE_NEXT_ICON,
        [false]: SONG_NEXT_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.bool.isRequired,
    className: PropTypes.string
}

const AudioNextIcon = ({

    buttonIdentifier: isLogue,
    className

}) => {
    const IconComponent = AUDIO_NEXT_MAP[isLogue]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

AudioNextIcon.propTypes = propTypes

export default AudioNextIcon
