// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAdminStore } from 'flux/admin/action'

class AdminDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAdminOn: PropTypes.bool.isRequired,
        updateAdminStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchAdmin: this.dispatchAdmin
        })
    }

    dispatchAdmin = (
        // Just toggle unless parent specifies value.
        isAdminOn = !this.props.isAdminOn
    ) => {
        // Turning on or off is always successful.
        this.props.updateAdminStore({ isAdminOn })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    adminStore: { isAdminOn }
}) => ({
    isAdminOn
})

export default connect(
    mapStateToProps,
    { updateAdminStore }
)(AdminDispatcher)
