import React from 'react'
import Album from './admin/album'
import Live from './live'

/*************
 * CONTAINER *
 *************/

const Switch = ({

    isAdmin,

...other }) => {

    return (isAdmin ?
        <Album {...other} /> :
        <Live {...other} />
    )
}

export default Switch
