import React from 'react'
import PropTypes from 'prop-types'

import {
    CONTINUE,
    REPEAT,
    PAUSE_AT_END,
    AUDIO_OPTIONS
} from '../../../constants/options'

const AUDIO_OPTIONS_MAP = {
    [CONTINUE]: (
        <circle
            {...{
                cx: 50,
                cy: 50,
                r: 25,
                fill: 'orange',
                stroke: 'red'
            }}
        />
    ),
    [REPEAT]: (
        <rect
            {...{
                x: 25,
                y: 25,
                width: 50,
                height: 50,
                fill: 'green',
                stroke: 'yellow'
            }}
        />
    ),
    [PAUSE_AT_END]: (
        <rect
            {...{
                x: 25,
                y: 25,
                width: 50,
                height: 50,
                fill: 'purple',
                stroke: 'blue'
            }}
        />
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const AudioOptionsIcon = ({

    buttonIdentifier: audioOptionIndex

}) => {
    const audioOptionKey = AUDIO_OPTIONS[audioOptionIndex]

    return (
        AUDIO_OPTIONS_MAP[audioOptionKey]
    )
}

AudioOptionsIcon.propTypes = propTypes

export default AudioOptionsIcon
