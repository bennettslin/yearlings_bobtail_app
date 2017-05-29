import React from 'react'
import PropTypes from 'prop-types'
import VerseUnit from '../verse/verse-unit'

const LyricVerse = ({

    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,

...other }) => {

    // Allow verse unit not to have knowledge of selected indices.
    const { verseObject } = other,
        { verseIndex } = verseObject,

        isSelected = verseIndex === selectedVerseIndex,
        isAfterSelected = verseIndex > selectedVerseIndex,
        isSliderSelected = verseIndex === sliderVerseIndex,
        isAfterSliderSelected = verseIndex > sliderVerseIndex,
        isInteractivated = verseIndex === interactivatedVerseIndex

    return (
        <VerseUnit {...other}
            isSelected={isSelected}
            isAfterSelected={isAfterSelected}
            isSliderSelected={isSliderSelected}
            isAfterSliderSelected={isAfterSliderSelected}
            isInteractivated={isInteractivated}
        />
    )
}

LyricVerse.propTypes = {
    verseObject: PropTypes.object.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired
}

export default LyricVerse
