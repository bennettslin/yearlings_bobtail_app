import React from 'react'
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

export default SwitchManager
