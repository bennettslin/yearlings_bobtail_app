// Component to show played song title, time played, and slider interface.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AudioSlider from './audio-slider'
import AudioTimer from './audio-timer'
import { getSongTitle } from '../../helpers/data-helper'

const AudioBanner = ({

    selectedSongIndex,

...other }) => (

    <div className="audio-block audio-banner-block">

        <AudioSlider {...other} />

        <div className="audio-banner audio-display-block">
            <div className="audio-banner-title">
                {getSongTitle({ songIndex: selectedSongIndex })}
            </div>
            <AudioTimer />
        </div>
    </div>
)

AudioBanner.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(AudioBanner)
