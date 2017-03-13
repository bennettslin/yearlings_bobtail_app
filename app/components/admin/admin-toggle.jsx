import React from 'react'
import { DEVICE_OBJECTS } from 'helpers/constants'

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
    selectedAdminIndex,
    isLyricExpanded,
    deviceIndex,
    windowWidth,
    windowHeight,
    onClick

}) => (
    <div className="admin-toggle">
        <a
            className="enabled"
            onClick={onClick}
        >
            {selectedAdminIndex ? 'Admin' : 'Live'}
        </a>
        <div>
            {isLyricExpanded ? 'expanded' : 'collapsed'}
        </div>
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
    </div>
)

export default AdminToggle
