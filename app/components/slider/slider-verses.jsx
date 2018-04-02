// Static field that shows the song verses in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { getSongVerseTimes,
         getSongTotalTime } from '../../helpers/data-helper'

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const sliderVersesPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
},

SliderVerses = ({

    selectedSongIndex

}) => {

    const verseTimes = getSongVerseTimes(selectedSongIndex),
        totalTime = getSongTotalTime(selectedSongIndex)

    return (
        <div className="slider-verses-block">
            {verseTimes.map((verseTime, verseIndex) => {

                // Don't show title verse.
                if (verseTime < 0) {
                    return null
                }

                const verseWidth = (totalTime - verseTime) / totalTime * 100,
                    verseStyle = {
                        width: `${verseWidth}%`
                    },
                    isEven = verseIndex % 2 === 0

                return (
                    <div
                        key={verseIndex}
                        className={cx(
                            'slider-bar',
                            'verse-slider-bar',
                            isEven ? 'even' : 'odd'
                        )}
                        style={verseStyle}
                    />
                )
            })}
        </div>
    )
}

SliderVerses.propTypes = sliderVersesPropTypes

export default connect(mapStateToProps)(SliderVerses)
