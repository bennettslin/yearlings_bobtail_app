// Component that switches between admin and user-facing view.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminManager from './admin/admin-manager'
import LiveManager from './main/live-manager'

/*************
 * CONTAINER *
 *************/

const SwitchManager = ({

    selectedAdminIndex,

...other }) => {

    return (selectedAdminIndex ?
        <AdminManager {...other} /> :
        <LiveManager {...other} />
    )
}

SwitchManager.propTypes = {
    selectedAdminIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedAdminIndex
}) => ({
    selectedAdminIndex
}))(SwitchManager)
