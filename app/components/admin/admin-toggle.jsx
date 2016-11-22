import React from 'react'

/*************
 * CONTAINER *
 *************/

const AdminToggle = (props) => {

    return (
        <AdminToggleView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AdminToggleView = ({

    // From props.
    isAdmin,
    onClick

}) => (
    <div className="admin-toggle">
        <a
            className="enabled"
            onClick={onClick}
        >
            {isAdmin ? 'Live' : 'Admin'}
        </a>
    </div>
)

export default AdminToggle
