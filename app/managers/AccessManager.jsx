import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    accessAnnotationIndex,
    accessAnnotationAnchorIndex,
    accessDotIndex,
    accessNavSongIndex
} from '../redux/actions/access'

import { selectAccessIndex } from '../redux/actions/storage'

class AccessManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedAccessIndex: PropTypes.number.isRequired,
        accessAnnotationIndex: PropTypes.func.isRequired,
        accessAnnotationAnchorIndex: PropTypes.func.isRequired,
        accessDotIndex: PropTypes.func.isRequired,
        accessNavSongIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    toggleAccess(
        selectedAccessValue = (this.props.selectedAccessIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedAccessValue === 'boolean') {
            selectedAccessValue = selectedAccessValue ? 1 : 0
        }

        this.props.selectAccessIndex(selectedAccessValue)
    }

    accessAnnotation(accessedAnnotationIndex) {
        this.props.accessAnnotationIndex(accessedAnnotationIndex)
        return true
    }

    accessAnnotationAnchor(accessedAnnotationAnchorIndex) {
        this.props.accessAnnotationAnchorIndex(accessedAnnotationAnchorIndex)
    }

    accessDot(accessedDotIndex) {
        this.props.accessDotIndex(accessedDotIndex)
    }

    accessNavSong(accessedNavSongIndex) {
        this.props.accessNavSongIndex(accessedNavSongIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedAccessIndex
}) => ({
    selectedAccessIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessAnnotationIndex,
        accessAnnotationAnchorIndex,
        accessDotIndex,
        accessNavSongIndex,
        selectAccessIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AccessManager)
