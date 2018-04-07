// Component that switches between admin and user-facing view.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminManager from './Admin/AdminManager'
import LiveManager from './Main/LiveManager'

const mapStateToProps = ({
    selectedAdminIndex
}) => ({
    selectedAdminIndex
})

/*************
 * CONTAINER *
 *************/

class SwitchManager extends Component {

    static propTypes = {
        selectedAdminIndex: PropTypes.number.isRequired
    }

    render() {
        const { selectedAdminIndex,
                ...other } = this.props

        return selectedAdminIndex ?
            <AdminManager {...other} /> :
            <LiveManager {...other} />
    }
}

export default connect(mapStateToProps)(SwitchManager)
