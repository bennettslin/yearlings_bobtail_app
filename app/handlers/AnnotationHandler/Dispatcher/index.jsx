import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSongStore } from 'flux/song/action'

import { getAnnotationIndexForDirection } from '../../../helpers/annotation'

class AnnotationDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchAnnotation = this.dispatchAnnotation
    }

    dispatchAnnotation = ({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedAnnotationIndex = this.props.selectedAnnotationIndex,
        direction
    } = {}) => {
        const {
            selectedDotKeys,
            earColumnIndex,
            isEarShown
        } = this.props

        // Called from arrow buttons in popup.
        if (direction) {
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                isEarShown,
                selectedSongIndex,
                selectedDotKeys,
                currentAnnotationIndex: selectedAnnotationIndex,
                earColumnIndex,
                direction
            })
        }

        this.props.updateSongStore({ selectedAnnotationIndex })
        return selectedAnnotationIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    transientStore: { isEarShown },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    songStore: { earColumnIndex }
}) => ({
    isEarShown,
    selectedSongIndex,
    selectedAnnotationIndex,
    dotsBitNumber,
    selectedDotKeys,
    earColumnIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationDispatcher)
