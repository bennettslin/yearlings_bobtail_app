// Cursor to show which verse is selected or interactivated.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

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
    interactivatedVerseIndex: PropTypes.number.isRequired,

    // From parent.
    children: PropTypes.element
},

SliderCursor = ({

    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,

    children

}) => {

    let cursorVerseIndex = selectedVerseIndex

    if (sliderVerseIndex > -1) {
        cursorVerseIndex = sliderVerseIndex

    } else if (interactivatedVerseIndex > -1) {
        cursorVerseIndex = interactivatedVerseIndex
    }

    const { beginTime,
            endTime } = getVerseBeginAndEndTimes(
                selectedSongIndex, cursorVerseIndex
            ),

        totalTime = getSongTotalTime(selectedSongIndex),

        leftOffset = beginTime / totalTime * 100,
        rightOffset = endTime / totalTime * 100,

        cursorStyle = {
            // left: `${leftOffset}%`,
            // width: `${(endTime - beginTime) / totalTime * 100}%`,
            clipPath: `inset(0, ${rightOffset}%, 0, ${leftOffset}%)`
        }

    return (
        <div
            className={cx(
                'SliderCursor',
                'absoluteFullContainer'
            )}
            style={cursorStyle}
        >
            {children}
        </div>
    )
}

SliderCursor.propTypes = sliderCursorPropTypes

export default connect(mapStateToProps)(SliderCursor)
