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
    deviceWidth,
    windowWidth,
    windowHeight,
    onClick

}) => (
    <div className="admin-toggle">
        <a
            className="enabled"
            onClick={onClick}
        >
            {isAdmin ? 'Live' : 'Admin'}
        </a>
        <div>
            {deviceWidth}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
    </div>
)

export default AdminToggle
