// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetAnnotationQueue } from '../../../redux/annotation/action'
import AnnotationDispatcher from '../Dispatcher'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'
import { getShowAnnotationForColumn } from '../../../helpers/annotation'
import { getVerseIndexForAnnotation } from '../../../api/album/annotations'
import { mapActivatedVerseIndex } from '../../../redux/activated/selectors'
import {
    mapQueuedAnnotationIndex,
    mapQueuedAnnotationFromCarousel,
    mapQueuedAnnotationFromLyricVerse
} from '../../../redux/annotation/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selectors'
import { mapIsEarShown } from '../../../redux/transient/selectors'
import { mapIsDotsSlideShown } from '../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        activatedVerseIndex = mapActivatedVerseIndex(state),
        queuedAnnotationIndex = mapQueuedAnnotationIndex(state),
        queuedAnnotationFromCarousel = mapQueuedAnnotationFromCarousel(state),
        queuedAnnotationFromLyricVerse = mapQueuedAnnotationFromLyricVerse(state),
        isEarShown = mapIsEarShown(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state),
        earColumnIndex = mapEarColumnIndex(state),
        isDotsSlideShown = mapIsDotsSlideShown(state)

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
                    annotationIndex: queuedAnnotationIndex,
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

    getDispatchAnnotation = dispatch => {
        if (dispatch) {
            this.dispatchAnnotationIndex = dispatch.dispatchAnnotationIndex
        }
    }

    getActivateVerse = dispatch => {
        if (dispatch) {
            this.activateVerseIndex = dispatch.activateVerseIndex
        }
    }

    render() {
        return (
            <>
                <AnnotationDispatcher {...{ ref: this.getDispatchAnnotation }} />
                <ActivatedVerseDispatcher {...{ ref: this.getActivateVerse }} />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { resetAnnotationQueue }
)(AnnotationListener)
