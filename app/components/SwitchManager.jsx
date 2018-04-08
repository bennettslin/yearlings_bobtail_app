// Component that switches between admin and user-facing view.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminManager from './Admin/AdminManager'
import Live from './Live/Live'

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
            <Live {...other} />
    }
}

export default connect(mapStateToProps)(SwitchManager)
