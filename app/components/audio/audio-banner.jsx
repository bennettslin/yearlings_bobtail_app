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
    hoveredVerseTimeBegin,
    hoveredVerseTimeEnd,
    sliderMousedOrTouched,
    selectedSongTitle,
    sliderRatio,
    selectedTimePlayed,
    totalTime,
    stanzaTimes,
    onSliderMouseOrTouch,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <AudioSlider
            isMousedOrTouched={sliderMousedOrTouched}
            hoveredVerseTimeBegin={hoveredVerseTimeBegin}
            hoveredVerseTimeEnd={hoveredVerseTimeEnd}
            sliderRatio={sliderRatio}
            selectedTimePlayed={selectedTimePlayed}
            totalTime={totalTime}
            stanzaTimes={stanzaTimes}
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
