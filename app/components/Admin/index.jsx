import React, { Component } from 'react'
import cx from 'classnames'

import Shared from './Shared'

import AdminNavSection from './AdminNav/AdminNav'
import { getAllTaskObjects } from './helper'

/*************
 * CONTAINER *
 *************/

class Admin extends Component {

    render() {

        const {
                selectSong,
                ...other
            } = this.props,

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
                            selectSong={selectSong}
                        />
                    </div>
                    <Shared {...other} />
                </div>
            </div>
        )
    }
}

export default Admin
