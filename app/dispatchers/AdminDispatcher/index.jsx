// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAdminStore } from 'flux/admin/action'

class AdminDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAdminOn: PropTypes.bool.isRequired,
        isGlobalAnnotationsOn: PropTypes.bool.isRequired,
        updateAdminStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchAdmin: this.dispatchAdmin,
            dispatchGlobalAnnotations: this.dispatchGlobalAnnotations
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

    dispatchGlobalAnnotations = (
        // Just toggle unless parent specifies value.
        isGlobalAnnotationsOn = !this.props.isGlobalAnnotationsOn
    ) => {
        // Turning on or off is always successful.
        this.props.updateAdminStore({ isGlobalAnnotationsOn })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    adminStore: {
        isAdminOn,
        isGlobalAnnotationsOn
    }
}) => ({
    isAdminOn,
    isGlobalAnnotationsOn
})

export default connect(
    mapStateToProps,
    { updateAdminStore }
)(AdminDispatcher)
