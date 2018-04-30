/**
 * The highlighted verse bar behaves like a cursor. This mask allows the slider
 * time displays to be readable when above the cursor.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongTotalTime, getVerseBeginAndEndTimes } from '../../../helpers/dataHelper'

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

const sliderTimesMaskPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,

    // From parent.
    children: PropTypes.element
},

SliderTimesMask = ({

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
        rightOffset = 100 - endTime / totalTime * 100,

        cursorStyle = {
            clipPath: `inset(0 ${rightOffset}% 0 ${leftOffset}%)`
        }

    return (
        <div
            className={cx(
                'SliderTimesMask',
                'absoluteFullContainer'
            )}
            style={cursorStyle}
        >
            {children}
        </div>
    )
}

SliderTimesMask.propTypes = sliderTimesMaskPropTypes

export default connect(mapStateToProps)(SliderTimesMask)
