import React from 'react'
import { getFormattedTime } from 'helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const AudioBanner = (props) => (
    <AudioBannerView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const AudioBannerView = ({

    // From props.
    selectedTimePlayed,
    isPrologue,
    isEpilogue,
    selectedSongTitle

}) => (
    <div className="audio-block audio-banner-block">
        <div className="audio-banner audio-display-block">
            {selectedSongTitle}{!isPrologue && !isEpilogue ? ': ' + getFormattedTime(selectedTimePlayed) : ''}
        </div>
        <div className="audio-banner audio-slider-block">

        </div>
    </div>
)

export default AudioBanner
