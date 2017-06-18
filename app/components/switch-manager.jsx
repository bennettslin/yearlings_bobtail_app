// Component that switches between admin and user-facing view.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminManager from './admin/admin-manager'
import LiveManager from './main/live-manager'
// import { getComponentShouldUpdate } from '../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class SwitchManager extends Component {

    // shouldComponentUpdate(nextProps) {
    //     const { props } = this,
    //         componentShouldUpdate = getComponentShouldUpdate({
    //             props,
    //             nextProps,
    //             updatingPropsArray: [
    //
    //             ]
    //         })
    //
    //     console.error('props:', JSON.stringify(props, null, 2));
    //     console.error('nextProps:', JSON.stringify(nextProps, null, 2));
    //     console.error(`componentShouldUpdate:`, componentShouldUpdate);
    //
    //     return componentShouldUpdate || true
    // }

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
