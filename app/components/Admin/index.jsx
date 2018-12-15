import React, { PureComponent } from 'react'
import cx from 'classnames'

import Shared from './Shared'

import AdminNavSection from './AdminNav/AdminNav'
import { getAllTaskObjects } from './helper'

/*************
 * CONTAINER *
 *************/

class Admin extends PureComponent {

    render() {

        const {
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
                            {...{
                                allTasks
                            }}
                        />
                    </div>
                    <Shared {...other} />
                </div>
            </div>
        )
    }
}

export default Admin
