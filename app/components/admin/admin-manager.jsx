import React from 'react'
import Shared from './shared'
import DevSection from './dev/dev-section'
import AdminNavSection from './admin-nav/admin-nav-section'
import { getAllTaskObjects } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const AdminManager = (props) => {
    const allTasks = getAllTaskObjects()

    return (
        <AdminManagerView {...props}
            allTasks={allTasks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AdminManagerView = ({

    // From props.
    handleNavSongSelect,

    // From controller.
    allTasks,

...other }) => {

    return (
        <div className="admin-column">
            <div className="admin-field album-admin-field">
                <DevSection />
                <AdminNavSection
                    allTasks={allTasks}
                    handleNavSongSelect={handleNavSongSelect}
                />
            </div>
            <Shared {...other} />
        </div>
    )
}

export default AdminManager
