import React, { PureComponent } from 'react'
import cx from 'classnames'

import Shared from './Shared'

import AdminNav from './AdminNav'
import { getAllTasks, getAllTasksV2 } from './helper'

/*************
 * CONTAINER *
 *************/

class Admin extends PureComponent {

    render() {

        const {
                ...other
            } = this.props,

            allTasks = getAllTasks(),
            allTasksV2 = getAllTasksV2()

        return (
            <div
                className={cx(
                    'Admin'
                )}
            >
                <div className="Admin__column">
                    <div className="Admin__field album">
                        <AdminNav
                            {...{
                                allTasks,
                                allTasksV2
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
