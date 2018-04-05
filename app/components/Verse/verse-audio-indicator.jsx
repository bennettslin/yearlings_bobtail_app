// Icon to show which verses are interactable.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getVerseAudioIndicatorText } from '../../helpers/formatHelper'

const mapStateToProps = ({
    isPlaying
}) => ({
    isPlaying
})

const verseAudioIndicatorPropTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,

    // From parent.
    isSelected: PropTypes.bool.isRequired
},

VerseAudioIndicator = ({
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

VerseAudioIndicator.propTypes = verseAudioIndicatorPropTypes

export default connect(mapStateToProps)(VerseAudioIndicator)
