// Static field that shows the song verses in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { getSongVerseTimes,
         getSongTotalTime } from '../../helpers/dataHelper'

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
        <div className="SliderVerses">
            {verseTimes.map((verseTime, verseIndex) => {

                // Don't show title verse.
                if (verseTime < 0) {
                    return null
                }

                const verseWidth =
                        (totalTime - verseTime) / totalTime * 100,

                    verseStyle = {
                        width: `${verseWidth}%`
                    },

                    isOdd = verseIndex % 2

                return (
                    <div
                        key={verseIndex}
                        className={cx(
                            'SliderVerseBar',
                            'Slider__dynamicBar',
                            isOdd ?
                                'SliderVerseBar__odd' :
                                'SliderVerseBar__even'
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
