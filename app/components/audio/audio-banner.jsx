import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
    selectedVerseIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,
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
                {getSongTitle({ songIndex: selectedSongIndex })}
            </div>
            {audioTimerChild}
        </div>
    </div>
)

export default connect(({
    selectedSongIndex,
    selectedVerseIndex,
    selectedTimePlayed
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedTimePlayed
}))(AudioBanner)
