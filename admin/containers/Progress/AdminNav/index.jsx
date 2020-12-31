import React from 'react'
import cx from 'classnames'
import ProgressFooter from '../ProgressFooter'
import {
    getSumOfTasks,
    getAllTasks,
    getAllTasksV2,
} from './helper'

/*************
 * CONTAINER *
 *************/

const AdminNav = () => {
    const

        allTasks = getAllTasks(),
        allTasksV2 = getAllTasksV2(),
        sumAllTasks = allTasks ? getSumOfTasks(allTasks) : null,
        sumAllTasksV2 = allTasksV2 ? getSumOfTasks(allTasksV2) : null

    return (
        <div
            className={cx(
                'AdminNav',
                'Admin__column'
            )}
        >
            <h2>progress</h2>
            <div className="row">
                <ProgressFooter {...{ sumTask: sumAllTasks }} />
                <ProgressFooter
                    isV2
                    {...{ sumTask: sumAllTasksV2 }}
                />
            </div>
        </div>
    )
}

export default AdminNav
