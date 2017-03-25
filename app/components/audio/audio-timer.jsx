import React from 'react'
import { getFormattedTime } from '../../helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const AudioTimer = ({

    selectedTimePlayed,

...other }) => {

    const formattedTime = getFormattedTime(selectedTimePlayed)

    return (
        <AudioTimerView {...other}
            formattedTime={formattedTime}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AudioTimerView = ({

    // From props.
    isLogue,

    // From controller.
    formattedTime

}) => (

    <div className="audio-banner-time">
        {isLogue ? '' : formattedTime}
    </div>
)

export default AudioTimer
