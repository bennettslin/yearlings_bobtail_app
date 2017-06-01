// Component that switches between admin and user-facing view.

import React from 'react'
import { connect } from 'react-redux'
import Overall from './admin/overall'
import Live from './live'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedAdminIndex
}) => ({
    selectedAdminIndex
})

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

export default connect(passReduxStateToProps)(SwitchManager)
