// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnnotationAccessDispatcher from '../../dispatchers/AnnotationAccessDispatcher'

class AnnotationAccessListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.dispatchAccessedAnnotation()
    }

    componentDidUpdate(prevProps) {
        this._accessDefaultAnnotation(prevProps)
        this._accessSelectedAnnotation(prevProps)
        this._accessAnnotationForInteractivatedVerse(prevProps)
    }

    _accessDefaultAnnotation(prevProps) {
        const
            {
                isDotsSlideShown,
                earColumnIndex,
                selectedSongIndex
            } = this.props,
            {
                isDotsSlideShown: wasDotsSlideShown,
                earColumnIndex: prevEarColumnIndex,
                selectedSongIndex: prevSongIndex
            } = prevProps

        if (
            (!isDotsSlideShown && wasDotsSlideShown) ||
            earColumnIndex !== prevEarColumnIndex ||
            selectedSongIndex !== prevSongIndex
        ) {
            this.dispatchAccessedAnnotation()
        }
    }

    _accessSelectedAnnotation(prevProps) {
        const
            { selectedAnnotationIndex } = this.props,
            { selectedAnnotationIndex: prevAnnotationIndex } = prevProps

        if (selectedAnnotationIndex !== prevAnnotationIndex) {
            this.dispatchAccessedAnnotation({
                annotationIndex: selectedAnnotationIndex
            })
        }
    }

    _accessAnnotationForInteractivatedVerse(prevProps) {
        const
            { interactivatedVerseIndex } = this.props,
            { interactivatedVerseIndex: prevVerseIndex } = prevProps

        let newAccessedVerseIndex

        // If interactivated verse changed...
        if (interactivatedVerseIndex !== prevVerseIndex) {

            // ... if verse is still interactivated, access its annotation...
            if (interactivatedVerseIndex > -1) {
                newAccessedVerseIndex = interactivatedVerseIndex

            // ... otherwise, access annotation of newly selected verse.
            } else {
                newAccessedVerseIndex = this.props.selectedVerseIndex
            }

            this.dispatchAccessedAnnotation({
                verseIndex: newAccessedVerseIndex
            })
        }
    }

    render() {
        return (
            <AnnotationAccessDispatcher {...{ getDispatch: this }} />
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown },
    sessionStore: { interactivatedVerseIndex },
    songStore: {
        earColumnIndex,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    isDotsSlideShown,
    earColumnIndex,
    interactivatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex

})

export default connect(mapStateToProps)(AnnotationAccessListener)
