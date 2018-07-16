/**
 * Controller to allow verse child not to have knowledge of various verse
 * indices, just where it is relative to cursor.
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseAudio from '../VerseAudio/VerseAudio'
import VerseColour from './VerseColour'
import VerseCursor from './VerseCursor'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    interactivatedVerseIndex,
    renderableStore,
    sliderStore
}) => ({
    canLyricRender,
    interactivatedVerseIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex,
    sliderVerseIndex: sliderStore.sliderVerseIndex
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
        inVerse: PropTypes.bool,
        inSliderVerse: PropTypes.bool,

        verseIndex: PropTypes.number.isRequired,

        startTime: PropTypes.number.isRequired,
        endTime: PropTypes.number.isRequired,
        fullCursorRatio: PropTypes.number,

        // For verse audio buttons.
        handleLyricPlay: PropTypes.func,
        handleLyricVerseSelect: PropTypes.func
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

                inVerse,
                inSliderVerse,

                startTime,
                endTime,
                fullCursorRatio,

                handleLyricPlay,
                handleLyricVerseSelect,

            ...other } = this.props,

            {
                inVerseBar,
                verseIndex,
            } = other,

            inLyricVerse = inVerse && !inVerseBar,

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
            <Fragment>

                <VerseColour
                    {...{
                        isOdd: Boolean(verseIndex % 2),
                        isOnCursor,
                        isAfterCursor,
                        isInteractivated,

                        inVerseBar,
                        inLyricVerse,
                        inSliderVerse
                    }}
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

                {inLyricVerse && (
                    <VerseAudio
                        {...{
                            verseIndex,
                            isOnCursor,
                            isAfterCursor,
                            isInteractivated,
                            handleLyricPlay,
                            handleLyricVerseSelect
                        }}
                    />
                )}

            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseController)
