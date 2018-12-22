import React from 'react'
import TasksBlock from './tasks-block'
import ProgressFooter from '../ProgressFooter'
import ProgressHelper from '../progressHelper'

/*************
 * CONTAINER *
 *************/

const TasksSection = (props) => {

    const { tasks } = props,

        maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromTasks(tasks),
        sumTask = ProgressHelper.getSumOfTasks(tasks)

    return (
        <TasksSectionView {...props}
            maxTotalNeededHours={maxTotalNeededHours}
            sumTask={sumTask}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TasksSectionView = ({

    // From props.
    tasks,

    // From controller.
    maxTotalNeededHours,
    sumTask

}) => (

    <div className="tasks-section">
        <h2>tasks</h2>
        <TasksBlock
            tasks={tasks}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div className="row">
            <ProgressFooter
                sumTask={sumTask}
            />
        </div>
    </div>
)

export default TasksSection
