// Icon to show which verses are interactable.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVerseAudioIndicatorText } from '../../helpers/format-helper'

const VerseAudioIndicator = ({
    isPlaying,
    isSelected
}) => {

    // FIXME: Change this, of course.
    const indicatorText = getVerseAudioIndicatorText({
        isPlaying,
        isSelected
    })

    return (
        <div className="verse-audio-indicator">
            {indicatorText}
        </div>
    )
}

VerseAudioIndicator.propTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,

    // From parent.
    isSelected: PropTypes.bool.isRequired
}

export default connect(({
    isPlaying
}) => ({
    isPlaying
}))(VerseAudioIndicator)
