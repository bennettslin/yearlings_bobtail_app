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
    isLyricExpanded,
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
            {isAdmin ? 'Admin' : 'Live'}
        </a>
        <div>
            {isLyricExpanded ? 'expanded' : 'collapsed'}
        </div>
        <div>
            {deviceWidth}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
    </div>
)

export default AdminToggle
