// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnnotationAccessDispatcher from '../Dispatcher'

class AnnotationAccessListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        earColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired
    }

    componentDidUpdate(prevProps) {
        this._accessDefaultAnnotation(prevProps)
        this._accessSelectedAnnotation(prevProps)
        this._accessAnnotationForInteractivatedVerse(prevProps)
    }

    _accessDefaultAnnotation(prevProps) {
        const
            { earColumnIndex } = this.props,
            { earColumnIndex: prevEarColumnIndex } = prevProps

        if (earColumnIndex !== prevEarColumnIndex) {
            this.dispatchAccessedAnnotation()
        }
    }

    _accessSelectedAnnotation(prevProps) {
        const
            {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        if (
            selectedSongIndex === prevSongIndex &&
            selectedAnnotationIndex !== prevAnnotationIndex
        ) {
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
    sessionStore: { interactivatedVerseIndex },
    songStore: {
        earColumnIndex,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    earColumnIndex,
    interactivatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex

})

export default connect(mapStateToProps)(AnnotationAccessListener)
