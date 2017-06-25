// Not presently used.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getSongVerseTimes,
         getSongTotalTime } from '../../helpers/data-helper'

const SliderVerses = ({

    selectedSongIndex,
    cursorVerseIndex

}) => {

    const verseTimes = getSongVerseTimes(selectedSongIndex),
        totalTime = getSongTotalTime(selectedSongIndex)

    return false && (
        <div className="slider-verses-block">
            {verseTimes.map((verseTime, index) => {

                // Don't show title verse.
                if (verseTime < 0) {
                    return null
                }

                const verseWidth = (totalTime - verseTime) / totalTime * 100,
                    verseStyle = {
                        width: `${verseWidth}%`
                    }

                let cursorPlacementClassName

                if (index === cursorVerseIndex) {
                    cursorPlacementClassName = 'on-cursor'
                } else if (index < cursorVerseIndex) {
                    cursorPlacementClassName = 'before-cursor'
                } else {
                    cursorPlacementClassName = 'after-cursor'
                }

                return (
                    <div
                        key={index}
                        className={classnames(
                            'slider-bar',
                            'verse-slider-bar',
                            cursorPlacementClassName
                        )}
                        style={verseStyle}
                    >
                    </div>
                )
            })}
        </div>
    )
}

SliderVerses.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    cursorVerseIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(SliderVerses)
