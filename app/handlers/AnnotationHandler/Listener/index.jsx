// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAnnotationStore } from 'flux/annotation/action'
import AnnotationDispatcher from '../Dispatcher'

import { getShowAnnotationForColumn } from '../../../helpers/annotation'
import { populateRefs } from 'helpers/ref'

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
        updateAnnotationStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._deselectAnnotationForEar(prevProps)
        this._checkAnnotation(prevProps)
    }

    _checkAnnotation(prevProps) {
        const {
                queuedAnnotationIndex,
                queuedAnnotationFromCarousel
            } = this.props,
            { queuedAnnotationIndex: prevAnnotationIndex } = prevProps

        if (queuedAnnotationIndex && !prevAnnotationIndex) {

            this.dispatchAnnotationIndex({
                selectedAnnotationIndex: queuedAnnotationIndex,
                fromCarousel: queuedAnnotationFromCarousel
            })

            this.props.updateAnnotationStore({
                queuedAnnotationIndex: 0,
                queuedAnnotationFromCarousel: false
            })
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
            <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
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
        queuedAnnotationFromCarousel
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
    queuedAnnotationFromCarousel
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAnnotationStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationListener)
