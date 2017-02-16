import React from 'react'

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
    selectedSongTitle,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <div className="audio-banner audio-display-block">
            <div className="audio-banner-title">
                {selectedSongTitle}
            </div>
            {audioTimerChild}
        </div>
        <div className="audio-banner audio-slider-block">

        </div>
    </div>
)

export default AudioBanner
