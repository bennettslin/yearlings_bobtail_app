import React from 'react'
import TasksBlock from './tasks-block'
import ProgressFooter from '../../ProgressFooter'
import { getSumOfTasks } from '../../helper'
import { getMaxTotalNeededHoursFromTasks } from './helper'

/*************
 * CONTAINER *
 *************/

const TasksSection = (props) => {

    const { tasks } = props,

        maxTotalNeededHours = getMaxTotalNeededHoursFromTasks(tasks),
        sumTask = getSumOfTasks(tasks)

    return (
        <div className="tasks-section">
            <h2>tasks</h2>
            <TasksBlock
                {...{
                    tasks,
                    maxTotalNeededHours
                }}
            />
            <div className="row">
                <ProgressFooter
                    {...{
                        sumTask
                    }}
                />
            </div>
        </div>
    )
}

export default TasksSection
