import React from 'react'
import { connect } from 'react-redux'
import Overall from './admin/overall'
import Live from './live'

const passReduxStateToProps = ({
    selectedAdminIndex
}) => ({
// Pass Redux state into component props.
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
