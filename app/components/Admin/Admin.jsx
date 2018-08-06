import React, { Component } from 'react'
import cx from 'classnames'

import Shared from './Sharedx'

import AdminNavSection from './AdminNav/AdminNav'
import { getAllTaskObjects } from 'helpers/dataHelper'

/*************
 * CONTAINER *
 *************/

class Admin extends Component {

    componentDidMount() {
        this.props.focusElementForAccess()
    }

    render() {

        const { handleNavSongSelect,
                ...other } = this.props,

            allTasks = getAllTaskObjects()

        return (
            <div
                className={cx(
                    'Admin'
                )}
            >
                <div className="Admin__column">
                    <div className="Admin__field album">
                        <AdminNavSection
                            allTasks={allTasks}
                            handleNavSongSelect={handleNavSongSelect}
                        />
                    </div>
                    <Shared {...other} />
                </div>
            </div>
        )
    }
}

export default Admin
