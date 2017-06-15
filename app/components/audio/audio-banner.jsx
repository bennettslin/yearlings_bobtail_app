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

    inOverlay,
    inAudioSection,
    inCustomSubfield,

...other }) => {

    const isPhone = getIsPhone(deviceIndex),

        // Render if...
        shouldRender = isPhone ?

            // ...in custom subfield or in overlay on phone.
            inCustomSubfield || inOverlay :

            // ...in menu or in overlay if not on phone.
            inAudioSection,

        songTitle = getSongTitle({
                songIndex: selectedSongIndex
            })

    return shouldRender && (
        <div className="audio-block audio-banner-block">
            <SliderSection {...other} />
            <div className="audio-banner audio-display-block">
                <div className="audio-banner-title">
                    {songTitle}
                </div>
                <AudioTimer />
            </div>
        </div>
    )
}

AudioBanner.defaultProps = {
    inOverlay: false,
    inAudioSection: false,
    inCustomSubfield: false
}

AudioBanner.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    inOverlay: PropTypes.bool.isRequired,
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
