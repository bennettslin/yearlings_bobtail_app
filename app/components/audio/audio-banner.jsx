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
    isLogue,
    songs,
    selectedSongIndex,
    interactivatedVerseIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    sliderMousedOrTouched,
    selectedSongTitle,
    sliderRatio,
    sliderTime,
    selectedTimePlayed,
    totalTime,
    stanzaTimes,
    verseTimes,
    handleAudioSliderMouseOrTouch,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <AudioSlider
            isLogue={isLogue}
            isMousedOrTouched={sliderMousedOrTouched}
            songs={songs}
            selectedSongIndex={selectedSongIndex}
            interactivatedVerseIndex={interactivatedVerseIndex}
            selectedVerseIndex={selectedVerseIndex}
            sliderVerseIndex={sliderVerseIndex}
            sliderRatio={sliderRatio}
            sliderTime={sliderTime}
            selectedTimePlayed={selectedTimePlayed}
            totalTime={totalTime}
            stanzaTimes={stanzaTimes}
            verseTimes={verseTimes}
            onMouseOrTouch={handleAudioSliderMouseOrTouch}
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
