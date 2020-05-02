// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetAnnotationQueue } from 'flux/annotation/action'
import AnnotationDispatcher from '../Dispatcher'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'

import { getShowAnnotationForColumn } from '../../../helpers/annotation'
import { getVerseIndexForAnnotationIndex } from 'album/api/annotations'
import { populateRefs } from '../../../helpers/ref'

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
             * selectable, interactive underlying verse instead.
             */
            if (queuedAnnotationFromLyricVerse && !canDispatchAnnotation) {
                const { selectedSongIndex } = this.props
                this.activateVerseIndex(
                    getVerseIndexForAnnotationIndex(
                        selectedSongIndex,
                        queuedAnnotationIndex
                    )
                )
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <>
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
                <ActivatedVerseDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown },
    transientStore: { isEarShown },
    activatedStore: { activatedVerseIndex },
    selectedStore: {
        earColumnIndex,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    },
    annotationStore: {
        queuedAnnotationIndex,
        queuedAnnotationFromCarousel,
        queuedAnnotationFromLyricVerse
    }
}) => ({
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
})

export default connect(
    mapStateToProps,
    { resetAnnotationQueue }
)(AnnotationListener)
