// Component to show played song title, time played, and slider interface.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import SliderSection from '../slider/slider-section'
import AudioTimer from './audio-timer'
import { getSongTitle } from '../../helpers/data-helper'
import { getIsPhone } from '../../helpers/responsive-helper'

const mapStateToProps = ({
    deviceIndex,
    selectedSongIndex
}) => ({
    deviceIndex,
    selectedSongIndex
})

const audioBannerDefaultProps = {
    inOverlay: false,
    inAudioSection: false,
    inCustomSubfield: false
},

audioBannerPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    inOverlay: PropTypes.bool.isRequired,
    inAudioSection: PropTypes.bool.isRequired,
    inCustomSubfield: PropTypes.bool.isRequired
},

AudioBanner = ({

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
            }),

        audioBannerComponent = (
            <div className={classnames(
                'audio-block',
                'audio-banner-block'
            )}>
                <SliderSection {...other} />
                <div className="audio-banner audio-display-block">
                    <div className="audio-banner-title">
                        {songTitle}
                    </div>
                    <AudioTimer />
                </div>
            </div>
        )

    if (shouldRender) {

        // If in custom subfield, wrap in parent element.
        return inCustomSubfield ? (
            <div className="audio-banner-custom-subfield">
                {audioBannerComponent}
            </div>
        ) : audioBannerComponent

    } else {
        return null
    }
}

AudioBanner.defaultProps = audioBannerDefaultProps
AudioBanner.propTypes = audioBannerPropTypes

export default connect(mapStateToProps)(AudioBanner)
