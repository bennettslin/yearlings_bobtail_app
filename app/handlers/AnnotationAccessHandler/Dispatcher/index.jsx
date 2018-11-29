// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'

import {
    getAnnotationIndexForVerseIndex,
    getAnnotationIndexForDirection
} from '../../../helpers/annotation'

class AnnotationAccessDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchAccessedAnnotation = this.dispatchAccessedAnnotation
    }

    dispatchAccessedAnnotation = ({
        direction,
        annotationIndex,
        verseIndex = this.props.selectedVerseIndex
    } = {}) => {
        const {
            selectedSongIndex,
            selectedDotKeys,
            earColumnIndex,
            isEarShown
        } = this.props

        let accessedAnnotationIndex

        if (annotationIndex) {
            accessedAnnotationIndex = getAnnotationIndexForDirection({
                currentAnnotationIndex: annotationIndex,
                selectedSongIndex,
                selectedDotKeys,
                earColumnIndex,
                isEarShown,
                direction
            })
        } else {
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                verseIndex,
                selectedSongIndex,
                selectedDotKeys,
                earColumnIndex,
                isEarShown,
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
        earColumnIndex,
        selectedSongIndex,
        selectedVerseIndex
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    transientStore: { isEarShown }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    dotsBitNumber,
    selectedDotKeys,
    earColumnIndex,
    isEarShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationAccessDispatcher)
