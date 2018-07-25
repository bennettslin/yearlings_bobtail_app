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
                r: 25
            }}
        />
    ),
    SONG_NEXT_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 25,
                y: 25,
                width: 50,
                height: 50
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
