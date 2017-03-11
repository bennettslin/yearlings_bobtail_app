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
    hoveredVerseTimeBegin,
    hoveredVerseTimeEnd,
    hoveredVerseIndex,
    sliderMousedOrTouched,
    selectedSongTitle,
    sliderRatio,
    sliderTime,
    selectedTimePlayed,
    totalTime,
    stanzaTimes,
    verseTimes,
    onSliderMouseOrTouch,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <AudioSlider
            isLogue={isLogue}
            isMousedOrTouched={sliderMousedOrTouched}
            hoveredVerseTimeBegin={hoveredVerseTimeBegin}
            hoveredVerseTimeEnd={hoveredVerseTimeEnd}
            hoveredVerseIndex={hoveredVerseIndex}
            sliderRatio={sliderRatio}
            sliderTime={sliderTime}
            selectedTimePlayed={selectedTimePlayed}
            totalTime={totalTime}
            stanzaTimes={stanzaTimes}
            verseTimes={verseTimes}
            onMouseOrTouch={onSliderMouseOrTouch}
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
