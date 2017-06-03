// Component to show single verse. If doublespeaker, includes both lines.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VerseUnit from '../verse/verse-unit'

const LyricVerse = ({

    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,

...other }) => {

    // Allow verse unit not to have knowledge of various verse indices.
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
    // Through Redux.
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,

    // From parent.
    verseObject: PropTypes.object.isRequired
}

export default connect(({
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
}) => ({
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
}))(LyricVerse)
