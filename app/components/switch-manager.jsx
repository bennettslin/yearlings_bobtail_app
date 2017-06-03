// Component that switches between admin and user-facing view.

import React from 'react'
import { connect } from 'react-redux'
import Overall from './admin/overall'
import Live from './live'

/*************
 * CONTAINER *
 *************/

const SwitchManager = ({

    selectedAdminIndex,

...other }) => {

    return (selectedAdminIndex ?
        <Overall {...other} /> :
        <Live {...other} />
    )
}

export default connect(({
    selectedAdminIndex
}) => ({
    selectedAdminIndex
}))(SwitchManager)
