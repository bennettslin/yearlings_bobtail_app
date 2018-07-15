/**
 * Controller to allow verse child not to have knowledge of various verse
 * indices.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Verse from '../Verse'
import VerseCursor from './VerseCursor'
import SliderVerse from '../../Slider/Stanzas/SliderVerse'

const mapStateToProps = ({
    canLyricRender,
    renderableVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
}) => ({
    canLyricRender,
    renderableVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
})

class VerseController extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        inVerseBar: PropTypes.bool,

        // Passed by SliderStanza.
        verseIndex: PropTypes.number,

        // Passed by LyricStanzaCard.
        verseObject: PropTypes.object,

        /**
         * For verses in slider. Verses in lyric will get these values from
         * verse object.
         */
        absoluteStartTime: PropTypes.number,
        absoluteEndTime: PropTypes.number,
        fullCursorRatio: PropTypes.number
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableVerseIndex,
                sliderVerseIndex,
                interactivatedVerseIndex,
                absoluteStartTime,
                absoluteEndTime,
                fullCursorRatio,

            ...other } = this.props,

            {
                inVerseBar,
                verseIndex,
                verseObject
            } = other,

            // Verse needs verseObject, SliderVerse needs verseIndex.
            VerseComponent = verseObject ? Verse : SliderVerse,

            /**
             * If verse is in lyric, only show cursor if it has a time value. If
             * it's in slider, always show cursor.
             */
            doRenderCursor = !isNaN(verseIndex) || !isNaN(verseObject.time),

            // Let verse cursor know the verse's start and end times.
            startTime = verseObject ?
                verseObject.time : absoluteStartTime,
            endTime = verseObject ?
                verseObject.endTime : absoluteEndTime,

            interactableProps = {},
            verseBarCursorProps = {},

            // Lyric verse will have verse object, slider verse won't.
            controllerVerseIndex =
                verseObject ? verseObject.verseIndex : verseIndex

            /**
             * Having verseIndex as a top-level prop allows a verse in the verseBar
             * to know when to update.
             */
            if (verseObject) {
                other.verseIndex = verseObject.verseIndex
            }

            /**
             * Tell verse where it is relative to cursor, and if it's
             * interactivated.
             */
            if (!inVerseBar) {
                const useSliderIndex = sliderVerseIndex > -1,
                    cursorIndex = useSliderIndex ?
                        sliderVerseIndex : renderableVerseIndex

                interactableProps.isOnCursor =
                    controllerVerseIndex === cursorIndex
                interactableProps.isAfterCursor =
                    controllerVerseIndex > cursorIndex
                interactableProps.isInteractivated =
                    controllerVerseIndex === interactivatedVerseIndex

            /**
             * Give each verse in the verse bar a unique key to render a new
             * verse each time. This ensures that the cursor  will not animate
             * from the far right for the previous verse to the far left for
             * the next verse.
             */
            } else {
                interactableProps.isOnCursor = true
                verseBarCursorProps.key = controllerVerseIndex
            }

        return (
            <VerseComponent
                {...other}
                {...interactableProps}
            >
                {doRenderCursor && (
                    <VerseCursor {...verseBarCursorProps}
                        {...{
                            verseOnCursor:
                                inVerseBar ||
                                interactableProps.isOnCursor,
                            verseAfterCursor:
                                interactableProps.isAfterCursor,
                            startTime,
                            endTime,
                            fullCursorRatio
                        }}
                    />
                )}
            </VerseComponent>
        )
    }
}

export default connect(mapStateToProps)(VerseController)
