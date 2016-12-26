import React from 'react'
import TitleSection from '../title/title-section'
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
    selectedSongTitle,

    titleInAudio,
    titleSectionProps

}) => (
    <div className="audio-block audio-banner-block">
        <div className="audio-banner audio-display-block">
            <div className="audio-banner-title">
                {selectedSongTitle}
            </div>
            <div className="audio-banner-time">
                {isPrologue || isEpilogue ? '' : getFormattedTime(selectedTimePlayed)}
            </div>
        </div>
        <div className="audio-banner audio-slider-block">

        </div>
    </div>
)

export default AudioBanner
