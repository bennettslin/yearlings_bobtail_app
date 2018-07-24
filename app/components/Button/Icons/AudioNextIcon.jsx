import React from 'react'
import PropTypes from 'prop-types'

const AUDIO_NEXT_ICON = {
    [true]: (
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
    [false]: (
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
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.bool.isRequired
}

const AudioNextIcon = ({

    buttonIdentifier: isLogue

}) => (

    AUDIO_NEXT_ICON[isLogue]
)

AudioNextIcon.propTypes = propTypes

export default AudioNextIcon
