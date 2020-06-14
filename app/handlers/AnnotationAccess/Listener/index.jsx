import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationAccessDispatcher from '../Dispatcher'
import { mapActivatedVerseIndex } from '../../../redux/activated/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex,
    mapEarColumnIndex
} from '../../../redux/selected/selector'

const mapStateToProps = state => {
    const
        activatedVerseIndex = mapActivatedVerseIndex(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state),
        earColumnIndex = mapEarColumnIndex(state)

    return {
        earColumnIndex,
        activatedVerseIndex,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}

class AnnotationAccessListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        earColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired
    }

    componentDidUpdate(prevProps) {
        this._accessDefaultAnnotation(prevProps)
        this._accessSelectedAnnotation(prevProps)
        this._accessAnnotationForActivatedVerse(prevProps)
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

    _accessAnnotationForActivatedVerse(prevProps) {
        const
            { activatedVerseIndex } = this.props,
            { activatedVerseIndex: prevVerseIndex } = prevProps

        let newAccessedVerseIndex

        // If activated verse changed...
        if (activatedVerseIndex !== prevVerseIndex) {

            // ... if verse is still activated, access its annotation...
            if (activatedVerseIndex > -1) {
                newAccessedVerseIndex = activatedVerseIndex

                this.dispatchAccessedAnnotation({
                    verseIndex: newAccessedVerseIndex
                })

            // ... otherwise, access annotation of newly selected verse.
            } else {
                newAccessedVerseIndex = this.props.selectedVerseIndex
            }
        }
    }

    getDispatchAccessedAnnotation = dispatch => {
        this.dispatchAccessedAnnotation = dispatch
    }

    render() {
        return (
            <AnnotationAccessDispatcher {...{ ref: this.getDispatchAccessedAnnotation }} />
        )
    }
}

export default connect(mapStateToProps)(AnnotationAccessListener)
