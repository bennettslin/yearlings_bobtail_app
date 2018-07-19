/**
 * Controller to allow verse not to update every time cursor or interactivated
 * verse index is changed.
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
        stanzaEndTime: PropTypes.number.isRequired,

        // For verse audio buttons.
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

            ...other } = this.props,

            {
                inVerseBar,
                verseIndex,
            } = other,

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
            <VerseControllerView {...other}
                {...{
                    isOnCursor,
                    isAfterCursor,
                    isInteractivated
                }}
            />
        )
    }
}

class VerseControllerView extends Component {

    static propTypes = {
        // From parent.
        isOnCursor: PropTypes.bool.isRequired,
        isAfterCursor: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired,

        verseIndex: PropTypes.number.isRequired,
        inVerse: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSliderVerse: PropTypes.bool,

        startTime: PropTypes.number.isRequired,
        stanzaEndTime: PropTypes.number.isRequired,

        // For verse audio buttons.
        handleLyricVerseSelect: PropTypes.func
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate = !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })

        return shouldComponentUpdate
    }

    render() {
        const {
            isOnCursor,
            isAfterCursor,
            isInteractivated,

            verseIndex,
            inVerse,
            inVerseBar,
            inSliderVerse,

            startTime,
            stanzaEndTime,

            handleLyricVerseSelect
        } = this.props,

        inLyricVerse = inVerse && !inVerseBar

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
                        stanzaEndTime
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
                            isAfterCursor,
                            isInteractivated,
                            handleLyricVerseSelect
                        }}
                    />
                )}

            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseController)
