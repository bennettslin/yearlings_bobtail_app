/**
 * Controller to allow verse child not to have knowledge of various verse
 * indices.
 */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Verse from '../Verse/Verse'
import VerseCursor from './VerseCursor'
import SliderVerse from '../Slider/Stanzas/SliderVerse'

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
    inVerseBar: PropTypes.bool,

    // Passed by SliderStanza.
    verseIndex: PropTypes.number,

    // Passed by LyricStanzaCard.
    verseObject: PropTypes.object,

    /**
     * For verses in slider. Verses in lyric will get these values from verse
     * object.
     */
    absoluteStartTime: PropTypes.number,
    absoluteEndTime: PropTypes.number,
    fullCursorRatio: PropTypes.number
},

VerseController = ({

    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,
    absoluteStartTime,
    absoluteEndTime,
    fullCursorRatio,

...other }) => {

    const { inVerseBar,
            verseIndex,
            verseObject } = other,

        // Verse needs verseObject, SliderVerse needs verseIndex.
        VerseComponent = verseObject ? Verse : SliderVerse,

        isTitle = verseObject && verseObject.isTitle,

        // Let verse cursor know the verse's start and end times.
        startTime = verseObject ?
            verseObject.time : absoluteStartTime,
        endTime = verseObject ?
            verseObject.endTime : absoluteEndTime,

        interactableProps = {}

        /**
         * Tell verse where it is relative to cursor, and if it's
         * interactivated.
         */
        if (!inVerseBar) {
            // Lyric verse will have verse object, slider verse won't.
            const controllerVerseIndex =
                verseObject ? verseObject.verseIndex : verseIndex,

                useSliderIndex = sliderVerseIndex > -1,
                cursorIndex = useSliderIndex ?
                    sliderVerseIndex : selectedVerseIndex

            interactableProps.isOnCursor =
                controllerVerseIndex === cursorIndex
            interactableProps.isAfterCursor =
                controllerVerseIndex > cursorIndex
            interactableProps.isInteractivated =
                controllerVerseIndex === interactivatedVerseIndex
        }

    return (
        <VerseComponent {...other} {...interactableProps}>
            {!isTitle && (
                <VerseCursor
                    showPlayTime={inVerseBar || interactableProps.isOnCursor}
                    startTime={startTime}
                    endTime={endTime}
                    fullCursorRatio={fullCursorRatio}
                />
            )}
        </VerseComponent>
    )
}

VerseController.propTypes = verseControllerPropTypes

export default connect(mapStateToProps)(VerseController)
