/**
 * Controller to allow verse child not to have knowledge of various verse
 * indices, just where it is relative to cursor.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Verse from '../Verse'
import VerseColour from './VerseColour'
import VerseCursor from './VerseCursor'
import SliderVerse from '../../Slider/Stanzas/SliderVerse'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

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
        inSliderStanza: PropTypes.bool,

        verseIndex: PropTypes.number.isRequired,

        // Passed by LyricStanzaCard and VerseBar only.
        verseObject: PropTypes.object,

        /**
         * For verses in slider. Verses in lyric will get these values from
         * verse object.
         */
        absoluteStartTime: PropTypes.number,
        absoluteEndTime: PropTypes.number,
        fullCursorRatio: PropTypes.number
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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

                inSliderStanza,

                absoluteStartTime,
                absoluteEndTime,
                fullCursorRatio,

            ...other } = this.props,

            {
                inVerseBar,
                verseIndex,
                verseObject
            } = other,

            VerseComponent = inSliderStanza ? SliderVerse : Verse,

            // Let verse cursor know the verse's start and end times.
            startTime = verseObject ?
                verseObject.time :
                absoluteStartTime,

            endTime = verseObject ?
                verseObject.endTime :
                absoluteEndTime,

            /**
             * Tell verse where it is relative to cursor, and if it's
             * interactivated.
             */
            cursorIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderableVerseIndex,

            isOnCursor = inVerseBar || verseIndex === cursorIndex,
            isAfterCursor = verseIndex > cursorIndex,
            isInteractivated = verseIndex === interactivatedVerseIndex

        return (
            <VerseComponent
                {...other}

                {...{
                    isOnCursor
                }}

                {...!inVerseBar && {
                    isAfterCursor,
                    isInteractivated
                }}
            >
                <VerseColour
                />

                <VerseCursor
                    {...{
                        isOnCursor,
                        isAfterCursor,
                        startTime,
                        endTime,
                        fullCursorRatio
                    }}

                    /**
                     * Give each verse in the verse bar a unique key to render
                     * a new verse each time. This ensures that the cursor will
                     * not animate from the far right for the previous verse to
                     * the far left for the next verse.
                     */
                    {...inVerseBar && {
                        key: verseIndex
                    }}
                />
            </VerseComponent>
        )
    }
}

export default connect(mapStateToProps)(VerseController)
