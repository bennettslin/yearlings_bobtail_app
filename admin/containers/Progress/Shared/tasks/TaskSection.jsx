import React from 'react'
import PropTypes from 'prop-types'
import TaskBlock from './TaskBlock'
import ProgressFooter from '../../ProgressFooter'
import { getSumOfTasks } from '../../AdminNav/helper'
import { getMaxTotalNeededHoursFromTasks } from './helper'

/*************
 * CONTAINER *
 *************/

const TaskSection = (props) => {
    const { tasks } = props,
        maxTotalNeededHours = getMaxTotalNeededHoursFromTasks(tasks),
        sumTask = getSumOfTasks(tasks)

    return (
        <div className="TaskSection">
            <h2>tasks</h2>
            <TaskBlock
                {...{
                    tasks,
                    maxTotalNeededHours
                }}
            />
            <div className="row">
                <ProgressFooter {...{ sumTask }} />
            </div>
        </div>
    )
}

TaskSection.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TaskSection
