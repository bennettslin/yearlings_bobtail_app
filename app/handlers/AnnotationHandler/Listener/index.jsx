// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSongQueueStore } from 'flux/songQueue/action'
import AnnotationDispatcher from '../Dispatcher'

import { getShowAnnotationForColumn } from '../../../helpers/annotation'

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
        queuedFromCarousel: PropTypes.bool.isRequired,
        updateSongQueueStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._deselectAnnotationForEar(prevProps)
        this._checkAnnotation(prevProps)
    }

    _checkAnnotation(prevProps) {
        const {
                queuedAnnotationIndex,
                queuedFromCarousel
            } = this.props,
            { queuedAnnotationIndex: prevAnnotationIndex } = prevProps

        if (queuedAnnotationIndex && !prevAnnotationIndex) {

            this.dispatchAnnotationIndex({
                selectedAnnotationIndex: queuedAnnotationIndex,
                fromCarousel: queuedFromCarousel
            })

            this.props.updateSongQueueStore({
                queuedAnnotationIndex: 0,
                queuedFromCarousel: false
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

    render() {
        return (
            <AnnotationDispatcher {...{ parentThis: this }} />
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
    songQueueStore: {
        queuedAnnotationIndex,
        queuedFromCarousel
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
    queuedFromCarousel
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSongQueueStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationListener)
