import React from 'react'

/*************
 * CONTAINER *
 *************/

const AdminToggleField = (props) => {

    return (
        <AdminToggleFieldView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AdminToggleFieldView = ({

    // From props.
    isAdmin,
    onClick

}) => (
    <div className="admin-toggle-field">
        <a
            className="enabled"
            onClick={onClick}
        >
            {isAdmin ? 'Live' : 'Admin'}
        </a>
    </div>
)

export default AdminToggleField
