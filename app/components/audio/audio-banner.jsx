// Component to show played song title, time played, and slider interface.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SliderSection from '../slider/slider-section'
import AudioTimer from './audio-timer'
import { getSongTitle } from '../../helpers/data-helper'
import { getIsPhone } from '../../helpers/responsive-helper'

const AudioBanner = ({

    deviceIndex,
    selectedSongIndex,

    inAudioSection,
    inCustomSubfield,

...other }) => {

    const isPhone = getIsPhone(deviceIndex)

    console.error('inAudioSection', inAudioSection);

    return isPhone === inCustomSubfield && (
        <div className="audio-block audio-banner-block">

            <SliderSection {...other} />

            <div className="audio-banner audio-display-block">
                <div className="audio-banner-title">
                    {getSongTitle({ songIndex: selectedSongIndex })}
                </div>
                <AudioTimer />
            </div>
        </div>
    )
}

AudioBanner.defaultProps = {
    inAudioSection: false,
    inCustomSubfield: false
}

AudioBanner.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    inAudioSection: PropTypes.bool.isRequired,
    inCustomSubfield: PropTypes.bool.isRequired
}

export default connect(({
    deviceIndex,
    selectedSongIndex
}) => ({
    deviceIndex,
    selectedSongIndex
}))(AudioBanner)
