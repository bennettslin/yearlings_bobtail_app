// Cursor to show which verse is selected or interactivated.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSongTotalTime, getVerseBeginAndEndTimes } from '../../helpers/dataHelper'

const mapStateToProps = ({
    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
})

const sliderCursorPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired
},

SliderCursor = ({

    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex

}) => {

    let cursorVerseIndex = selectedVerseIndex

    if (sliderVerseIndex > -1) {
        cursorVerseIndex = sliderVerseIndex

    } else if (interactivatedVerseIndex > -1) {
        cursorVerseIndex = interactivatedVerseIndex
    }

    const { beginTime,
            endTime } = getVerseBeginAndEndTimes(selectedSongIndex, cursorVerseIndex),

        totalTime = getSongTotalTime(selectedSongIndex),

        cursorStyle = {
            left: `${beginTime / totalTime * 100}%`,
            width: `${(endTime - beginTime) / totalTime * 100}%`
        }

    return (
        <div
            className="audio-cursor"
            style={cursorStyle}
        />
    )
}

SliderCursor.propTypes = sliderCursorPropTypes

export default connect(mapStateToProps)(SliderCursor)
