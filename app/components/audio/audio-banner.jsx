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
    isLogue,
    selectedTimePlayed,
    selectedSongTitle,

}) => (
    <div className="audio-block audio-banner-block">
        <div className="audio-banner audio-display-block">
            <div className="audio-banner-title">
                {selectedSongTitle}
            </div>
            <div className="audio-banner-time">
                {isLogue ? '' : getFormattedTime(selectedTimePlayed)}
            </div>
        </div>
        <div className="audio-banner audio-slider-block">

        </div>
    </div>
)

export default AudioBanner
