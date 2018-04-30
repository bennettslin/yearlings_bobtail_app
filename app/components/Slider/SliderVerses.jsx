// Static field that shows the song verses in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import VerseController from '../Verse/VerseController'

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
        <div className={cx(
            'SliderVerses'
        )}>
            {verseTimes.map((verseTimeObject, verseIndex) => (
                <VerseController
                    key={verseIndex}
                    totalTime={totalTime}
                    verseIndex={verseIndex}
                    verseTimeObject={verseTimeObject}
                />
            ))}
        </div>
    )
}

SliderVerses.propTypes = sliderVersesPropTypes

export default connect(mapStateToProps)(SliderVerses)
