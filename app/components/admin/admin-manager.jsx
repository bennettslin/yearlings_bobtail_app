import React from 'react'
import Shared from './shared'
import DevSection from './dev/dev-section'
import AdminNavSection from './admin-nav/admin-nav-section'
import ProgressHelper from '../../helpers/progress-helper'
import AlbumData from '../../album-data'
const { songs } = AlbumData

/*************
 * CONTAINER *
 *************/

const AdminManager = ({

    tasks: albumTasks,

...other }) => {
    const allTasks = ProgressHelper.getAllTaskObjects(albumTasks, songs)

    return (
        <AdminManagerView {...other}
            albumTasks={albumTasks}
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
