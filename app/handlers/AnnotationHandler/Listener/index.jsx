// Singleton to listen for song change.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetAnnotationQueue } from 'flux/annotation/action'
import AnnotationDispatcher from '../Dispatcher'
import InteractivatedVerseDispatcher from '../../../dispatchers/InteractivatedVerseDispatcher'

import { getShowAnnotationForColumn } from '../../../helpers/annotation'
import { getVerseIndexForAnnotationIndex } from '../../../helpers/data'
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
        interactivatedVerseIndex: PropTypes.number.isRequired,
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
                this.dispatchInteractivatedVerseIndex(
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
            <___>
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
                <InteractivatedVerseDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown },
    transientStore: { isEarShown },
    sessionStore: { interactivatedVerseIndex },
    songStore: {
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
    interactivatedVerseIndex,
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
