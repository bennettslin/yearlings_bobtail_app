import React from 'react'
import AudioSlider from './audio-slider'

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
    selectedTimePlayed,
    totalTime,
    stanzaTimes,
    onTimeChange,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <AudioSlider
            selectedTimePlayed={selectedTimePlayed}
            totalTime={totalTime}
            stanzaTimes={stanzaTimes}
            onTimeChange={onTimeChange}
        />
        <div className="audio-banner audio-display-block">
            <div className="audio-banner-title">
                {selectedSongTitle}
            </div>
            {audioTimerChild}
        </div>
    </div>
)

export default AudioBanner
