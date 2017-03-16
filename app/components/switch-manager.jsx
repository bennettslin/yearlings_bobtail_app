import React from 'react'
import Album from './admin/album'
import Live from './live'

/*************
 * CONTAINER *
 *************/

const SwitchManager = ({

    selectedAdminIndex,

...other }) => {

    return (selectedAdminIndex ?
        <Album {...other} /> :
        <Live {...other} />
    )
}

export default SwitchManager
