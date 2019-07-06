import React from 'react'
import PropTypes from 'prop-types'

import TaskRow from './TaskRow'
import { hasRemainingHours } from './helper'

const propTypes = {
    tasks: PropTypes.array.isRequired,
    isSubtask: PropTypes.bool,
    maxTotalNeededHours: PropTypes.number.isRequired
}

const TaskBlock = ({
    tasks,
    isSubtask,
    maxTotalNeededHours

}) => (

    <div className={isSubtask ? 'SubtaskBlock' : 'TaskBlock'}>
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
                        <TaskBlock
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

TaskBlock.propTypes = propTypes

export default TaskBlock
