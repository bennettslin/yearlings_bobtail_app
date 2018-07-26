import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    CONTINUE,
    REPEAT,
    PAUSE_AT_END,
    AUDIO_OPTIONS
} from '../../../constants/options'

const
    CONTINUE_ICON = ({
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
    REPEAT_ICON = ({
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
    PAUSE_AT_END_ICON = ({
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
    AUDIO_OPTIONS_MAP = {
        [CONTINUE]: CONTINUE_ICON,
        [REPEAT]: REPEAT_ICON,
        [PAUSE_AT_END]: PAUSE_AT_END_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired,
    className: PropTypes.string
}

const AudioOptionsIcon = ({

    buttonIdentifier: audioOptionIndex,
    className

}) => {
    const
        audioOptionKey = AUDIO_OPTIONS[audioOptionIndex],
        IconComponent = AUDIO_OPTIONS_MAP[audioOptionKey]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

AudioOptionsIcon.propTypes = propTypes

export default AudioOptionsIcon
