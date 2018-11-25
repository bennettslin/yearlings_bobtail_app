// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'

import {
    getAnnotationIndexForVerseIndex,
    getAnnotationIndexForDirection
} from '../../helpers/annotation'

class AnnotationAccessDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchAccessedAnnotation = this.dispatchAccessedAnnotation
    }

    dispatchAccessedAnnotation = ({
        annotationIndex,
        direction,
        selectedSongIndex = this.props.selectedSongIndex,
        verseIndex = this.props.selectedVerseIndex,
        selectedDotKeys = this.props.selectedDotKeys,
        earColumnIndex = this.props.earColumnIndex
    } = {}) => {

        let accessedAnnotationIndex = 0

        if (annotationIndex) {
            accessedAnnotationIndex = getAnnotationIndexForDirection({
                currentAnnotationIndex: annotationIndex,
                selectedSongIndex,
                selectedDotKeys,
                isEarShown: this.props.isEarShown,
                earColumnIndex: earColumnIndex,
                direction
            })
        } else {
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                verseIndex,
                selectedSongIndex,
                selectedDotKeys,
                isEarShown: this.props.isEarShown,
                earColumnIndex: earColumnIndex,
                direction
            })
        }

        this.props.updateAccessStore({ accessedAnnotationIndex })

        // If needed, scroll to this annotation index.
        return accessedAnnotationIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedVerseIndex
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    sessionStore: { earColumnIndex }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    dotsBitNumber,
    selectedDotKeys,
    earColumnIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationAccessDispatcher)
