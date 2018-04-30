/**
 * Controller to allow verse child not to have knowledge of various verse
 * indices.
 */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Verse from '../Verse/Verse'
import SliderVerse from '../Slider/Verses/SliderVerse'

const mapStateToProps = ({
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
}) => ({
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
})

const verseControllerPropTypes = {
    // Through Redux.
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,

    // From parent.

    // Passed by SliderVerses.
    verseIndex: PropTypes.number,

    // Passed by LyricStanzaCard.
    verseObject: PropTypes.object
},

VerseController = ({

    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,

...other }) => {

    const { verseIndex,
            verseObject } = other,

        // Lyric verse will have verse object, slider verse won't.
        controllerVerseIndex =
            verseObject ? verseObject.verseIndex : verseIndex,

        isSelected = controllerVerseIndex === selectedVerseIndex,
        isAfterSelected = controllerVerseIndex > selectedVerseIndex,
        isSliderSelected = controllerVerseIndex === sliderVerseIndex,
        isAfterSliderSelected = controllerVerseIndex > sliderVerseIndex,
        isInteractivated = controllerVerseIndex === interactivatedVerseIndex,

        // Verse needs verseObject, SliderVerse needs verseIndex.
        VerseComponent = verseObject ? Verse : SliderVerse

    return (
        <VerseComponent {...other}
            isSelected={isSelected}
            isAfterSelected={isAfterSelected}
            isSliderSelected={isSliderSelected}
            isAfterSliderSelected={isAfterSliderSelected}
            isInteractivated={isInteractivated}
        />
    )
}

VerseController.propTypes = verseControllerPropTypes

export default connect(mapStateToProps)(VerseController)
