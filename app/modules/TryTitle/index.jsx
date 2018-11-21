// Child that knows rules to turn on score. Not needed if just turning off.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/actions/toggle'

class TryTitle extends Component {

    static propTypes = {
        // Through Redux.
        isTitleShown: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getTryToggleTitle: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTryToggleTitle(this.tryToggleTitle)
    }

    tryToggleTitle(
        // Just toggle unless parent specifies value.
        isTitleShown = !this.props.isTitleShown
    ) {
        // Turning on or off is always successful.
        this.props.updateToggleStore({
            isTitleShown
        })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isTitleShown }
}) => ({
    isTitleShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TryTitle)
