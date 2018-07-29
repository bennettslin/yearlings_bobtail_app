import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const
    IS_PLAYING_ICON = ({
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
    IS_PAUSED_ICON = ({
        className
    }) => (
        <path
            {...{
                className,
                x: 0,
                y: 0,
                d: 'M 0,0 L 100,0 L 100,100 0,100 Z'
            }}
        />
    ),
    AUDIO_PLAY_MAP = {
        [true]: IS_PLAYING_ICON,
        [false]: IS_PAUSED_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.bool.isRequired,
    className: PropTypes.string
}

const AudioPlayIcon = ({

    buttonIdentifier: isPlaying,
    className

}) => {
    const IconComponent = AUDIO_PLAY_MAP[isPlaying]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

AudioPlayIcon.propTypes = propTypes

export default AudioPlayIcon
