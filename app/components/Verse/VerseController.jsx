/**
 * Controller to allow verse child not to have knowledge of various verse
 * indices.
 */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Verse from '../Verse/Verse'

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
    isLyricVerse: PropTypes.bool,
    verseIndex: PropTypes.number,
    verseObject: PropTypes.object.isRequired
},

VerseController = ({

    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,
    isLyricVerse,
    verseIndex,

...other }) => {

    const { verseObject } = other,

        // Lyric verse will have verse object, slider verse won't.
        controllerVerseIndex =
            verseObject ? verseObject.verseIndex : verseIndex,

        isSelected = controllerVerseIndex === selectedVerseIndex,
        isAfterSelected = controllerVerseIndex > selectedVerseIndex,
        isSliderSelected = controllerVerseIndex === sliderVerseIndex,
        isAfterSliderSelected = controllerVerseIndex > sliderVerseIndex,
        isInteractivated = controllerVerseIndex === interactivatedVerseIndex,

        // Allow this to be SliderVerse, of course.
        VerseComponent = isLyricVerse ? Verse : Verse

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
