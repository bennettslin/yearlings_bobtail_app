import React from 'react'
import TaskRow from './task-row'
import ProgressHelper from '../progressHelper'

/*************
 * CONTAINER *
 *************/

const TasksBlock = (props) => (
    <TasksBlockView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const TasksBlockView = ({

    // From props.
    tasks,
    isSubtask,
    maxTotalNeededHours

}) => (

    <div className={isSubtask ? 'subtask-block' : 'task-block'}>
        {tasks
            .filter(task => ProgressHelper.hasRemainingHours(task))
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

export default TasksBlock
