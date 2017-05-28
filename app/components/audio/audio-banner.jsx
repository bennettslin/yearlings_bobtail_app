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
    audioTimerChild: PropTypes.element.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioBannerView = ({

    // From props.
    selectedSongIndex,
    audioTimerChild,

...other }) => (

    <div className="audio-block audio-banner-block">
        <AudioSlider {...other}
            selectedSongIndex={selectedSongIndex}
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
