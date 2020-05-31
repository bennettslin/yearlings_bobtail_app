// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetAnnotationQueue } from '../../../redux/annotation/action'
import AnnotationDispatcher from '../Dispatcher'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'
import { getShowAnnotationForColumn } from '../../../helpers/annotation'
import { getVerseIndexForAnnotation } from '../../../album/api/annotations'
import { populateRefs } from '../../../helpers/ref'
import { ACTIVATED_VERSE_INDEX_SELECTOR } from '../../../redux/activated/selectors'
import {
    QUEUED_ANNOTATION_INDEX_SELECTOR,
    QUEUED_ANNOTATION_FROM_CAROUSEL_SELECTOR,
    QUEUED_ANNOTATION_FROM_LYRIC_VERSE_SELECTOR
} from '../../../redux/annotation/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_VERSE_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR,
    EAR_COLUMN_INDEX_SELECTOR
} from '../../../redux/selected/selectors'
import { IS_EAR_SHOWN_SELECTOR } from '../../../redux/transient/selectors'
import { IS_DOTS_SLIDE_SHOWN_SELECTOR } from '../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        activatedVerseIndex = ACTIVATED_VERSE_INDEX_SELECTOR(state),
        queuedAnnotationIndex = QUEUED_ANNOTATION_INDEX_SELECTOR(state),
        queuedAnnotationFromCarousel = QUEUED_ANNOTATION_FROM_CAROUSEL_SELECTOR(state),
        queuedAnnotationFromLyricVerse = QUEUED_ANNOTATION_FROM_LYRIC_VERSE_SELECTOR(state),
        isEarShown = IS_EAR_SHOWN_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        selectedVerseIndex = SELECTED_VERSE_INDEX_SELECTOR(state),
        selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state),
        earColumnIndex = EAR_COLUMN_INDEX_SELECTOR(state),
        isDotsSlideShown = IS_DOTS_SLIDE_SHOWN_SELECTOR(state)

    return {
        isDotsSlideShown,
        isEarShown,
        earColumnIndex,
        activatedVerseIndex,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex,
        queuedAnnotationIndex,
        queuedAnnotationFromCarousel,
        queuedAnnotationFromLyricVerse
    }
}

class AnnotationListener extends PureComponent {
    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
        queuedAnnotationIndex: PropTypes.number.isRequired,
        queuedAnnotationFromCarousel: PropTypes.bool.isRequired,
        queuedAnnotationFromLyricVerse: PropTypes.bool.isRequired,
        resetAnnotationQueue: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._deselectAnnotationForEar(prevProps)
        this._checkAnnotation(prevProps)
    }

    _checkAnnotation(prevProps) {
        const {
                queuedAnnotationIndex
            } = this.props,
            { queuedAnnotationIndex: prevAnnotationIndex } = prevProps

        if (queuedAnnotationIndex && !prevAnnotationIndex) {

            const {
                    queuedAnnotationFromCarousel,
                    queuedAnnotationFromLyricVerse
                } = this.props,

                canDispatchAnnotation = this.dispatchAnnotationIndex({
                    selectedAnnotationIndex: queuedAnnotationIndex,
                    fromCarousel: queuedAnnotationFromCarousel
                })

            /**
             * If annotation in lyric verse was clicked, and annotation is not
             * selectable, activate underlying verse, but only if it is
             * interactable.
             */
            if (queuedAnnotationFromLyricVerse && !canDispatchAnnotation) {
                const
                    { selectedSongIndex } = this.props,
                    annotationVerseIndex = getVerseIndexForAnnotation(
                        selectedSongIndex,
                        queuedAnnotationIndex
                    )

                if (Number.isFinite(annotationVerseIndex)) {
                    this.activateVerseIndex(annotationVerseIndex)
                }
            }

            this.props.resetAnnotationQueue()
        }
    }

    _deselectAnnotationForEar(prevProps) {
        const {
                selectedAnnotationIndex,
                earColumnIndex,
                isEarShown
            } = this.props,
            {
                earColumnIndex: prevEarColumnIndex,
                isEarShown: wasEarShown
            } = prevProps

        if (
            selectedAnnotationIndex &&
            (
                earColumnIndex !== prevEarColumnIndex ||
                (isEarShown && !wasEarShown)
            )
        ) {
            const { selectedSongIndex } = this.props

            const showAnnotationForColumn = getShowAnnotationForColumn({
                selectedSongIndex,
                selectedAnnotationIndex,
                earColumnIndex,
                isEarShown
            })

            if (!showAnnotationForColumn) {
                this.dispatchAnnotationIndex()
            }
        }
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getActivateVerse = dispatch => {
        if (dispatch) {
            this.activateVerseIndex = dispatch.activateVerseIndex
        }
    }

    render() {
        return (
            <>
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
                <ActivatedVerseDispatcher {...{ ref: this.getActivateVerse }} />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { resetAnnotationQueue }
)(AnnotationListener)
