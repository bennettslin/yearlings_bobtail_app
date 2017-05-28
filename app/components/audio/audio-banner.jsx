import React from 'react'
import PropTypes from 'prop-types'
import AudioSlider from './audio-slider'
import { getSongTitle } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const AudioBanner = (props) => (
    <AudioBannerView {...props} />
)

AudioBanner.propTypes = {
    selectedSongIndex: PropTypes.number.isRequired,
    sliderMousedOrTouched: PropTypes.bool.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    sliderRatio: PropTypes.number,
    sliderTime: PropTypes.number,
    selectedTimePlayed: PropTypes.number.isRequired,
    handleAudioSliderTouchBegin: PropTypes.func.isRequired,
    audioTimerChild: PropTypes.element.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioBannerView = ({

    // From props.
    selectedSongIndex,
    interactivatedVerseIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    sliderMousedOrTouched,
    sliderRatio,
    sliderTime,
    selectedTimePlayed,
    handleAudioSliderTouchBegin,

    audioTimerChild

}) => (
    <div className="audio-block audio-banner-block">
        <AudioSlider
            isMousedOrTouched={sliderMousedOrTouched}
            selectedSongIndex={selectedSongIndex}
            interactivatedVerseIndex={interactivatedVerseIndex}
            selectedVerseIndex={selectedVerseIndex}
            sliderVerseIndex={sliderVerseIndex}
            sliderRatio={sliderRatio}
            sliderTime={sliderTime}
            selectedTimePlayed={selectedTimePlayed}
            onTouch={handleAudioSliderTouchBegin}
        />
        <div className="audio-banner audio-display-block">
            <div className="audio-banner-title">
                {getSongTitle(selectedSongIndex)}
            </div>
            {audioTimerChild}
        </div>
    </div>
)

export default AudioBanner
