// Child that knows rules to toggle admin.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class AdminDispatcher extends Component {

    static propTypes = {
        // Through Redux.
        isAdminOn: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchAdmin = this.dispatchAdmin
    }

    dispatchAdmin = (
        // Just toggle unless parent specifies value.
        isAdminOn = !this.props.isAdminOn
    ) => {
        // Turning on or off is always successful.
        this.props.updateToggleStore({ isAdminOn })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAdminOn }
}) => ({
    isAdminOn
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AdminDispatcher)
