import React from 'react'
import PropTypes from 'prop-types'

import TaskRow from './task-row'
import { hasRemainingHours } from './helper'

const propTypes = {
    tasks: PropTypes.array.isRequired,
    isSubtask: PropTypes.bool,
    maxTotalNeededHours: PropTypes.number.isRequired
}

const TasksBlock = ({
    tasks,
    isSubtask,
    maxTotalNeededHours

}) => (

    <div className={isSubtask ? 'subtask-block' : 'task-block'}>
        {tasks
            .filter(task => hasRemainingHours(task))
            .map((task, taskIndex) => (
                <div
                    key={taskIndex}
                    className="block-unit"
                >
                    <TaskRow
                        task={task}
                        isSubtask={isSubtask}
                        maxTotalNeededHours={maxTotalNeededHours}
                    />
                    {task.subtasks &&
                        <TasksBlock
                            tasks={task.subtasks}
                            isSubtask
                            maxTotalNeededHours={maxTotalNeededHours}
                        />
                    }
                </div>
            )
            )}
    </div>
)

TasksBlock.propTypes = propTypes

export default TasksBlock
