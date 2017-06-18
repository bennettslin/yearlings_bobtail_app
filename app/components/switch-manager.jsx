// Component that switches between admin and user-facing view.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminManager from './admin/admin-manager'
import LiveManager from './main/live-manager'

/*************
 * CONTAINER *
 *************/

class SwitchManager extends Component {

    render() {
        const { selectedAdminIndex,
                ...other } = this.props

        return selectedAdminIndex ?
            <AdminManager {...other} /> :
            <LiveManager {...other} />
    }
}

SwitchManager.propTypes = {
    selectedAdminIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedAdminIndex
}) => ({
    selectedAdminIndex
}))(SwitchManager)
