import React from 'react'
import PropTypes from 'prop-types'
import AudioSlider from './audio-slider'

/*************
 * CONTAINER *
 *************/

const AudioBanner = (props) => (
    <AudioBannerView {...props} />
)

AudioBanner.propTypes = {
    songs: PropTypes.array.isRequired,
    selectedSongTitle: PropTypes.string.isRequired,
    isLogue: PropTypes.bool.isRequired,
    sliderMousedOrTouched: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    sliderRatio: PropTypes.number,
    sliderTime: PropTypes.number,
    selectedTimePlayed: PropTypes.number.isRequired,
    totalTime: PropTypes.number,
    stanzaTimes: PropTypes.array.isRequired,
    verseTimes: PropTypes.array,
    handleAudioSliderTouchBegin: PropTypes.func.isRequired,
    audioTimerChild: PropTypes.element.isRequired
}

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
    handleAudioSliderTouchBegin,

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
            onTouch={handleAudioSliderTouchBegin}
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
