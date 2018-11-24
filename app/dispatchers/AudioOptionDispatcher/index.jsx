// Child that knows rules to toggle admin.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { AUDIO_OPTIONS } from 'constants/options'

class AudioOptionDispatcher extends Component {

    static propTypes = {
        // Through Redux.
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchAudioOption = this.dispatchAudioOption
    }

    dispatchAudioOption = (
        // Just toggle unless parent specifies value.
        selectedAudioOptionIndex =
        (this.props.selectedAudioOptionIndex + 1) % AUDIO_OPTIONS.length
    ) => {
        // If no argument passed, then just toggle amongst audio options.
        this.props.updateSessionStore({ selectedAudioOptionIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    sessionStore: { selectedAudioOptionIndex }
}) => ({
    selectedAudioOptionIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AudioOptionDispatcher)
