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
    sliderMousedOrTouched,
    selectedSongTitle,
    selectedTimePlayed,
    totalTime,
    stanzaTimes,
    onSliderMouseOrTouch,
    onTimeChange,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <AudioSlider
            isMousedOrTouched={sliderMousedOrTouched}
            selectedTimePlayed={selectedTimePlayed}
            totalTime={totalTime}
            stanzaTimes={stanzaTimes}
            onMouseOrTouch={onSliderMouseOrTouch}
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
