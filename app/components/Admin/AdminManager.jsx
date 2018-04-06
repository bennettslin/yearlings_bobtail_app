import React, { Component } from 'react'
import Shared from './shared'
// import DevSection from './dev/dev-section'
import AdminNavSection from './AdminNav/AdminNav'
import { getAllTaskObjects } from '../../helpers/dataHelper'

/*************
 * CONTAINER *
 *************/

class AdminManager extends Component {

    componentDidMount() {
        this.props.focusBody()
    }

    render() {

        const { handleNavSongSelect,
                ...other } = this.props,

            allTasks = getAllTaskObjects()

        return (
            <div className="admin-column">
                <div className="admin-field album-admin-field">
                    {/* <DevSection /> */}
                    <AdminNavSection
                        allTasks={allTasks}
                        handleNavSongSelect={handleNavSongSelect}
                    />
                </div>
                <Shared {...other} />
            </div>
        )
    }
}

export default AdminManager
