import React from 'react'
import TaskRow from './task-row'

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
        {tasks.map((task, taskIndex) => (
                <div
                    key={taskIndex}
                    className="block-unit"
                >
                    <TaskRow
                        task={task}
                        isSubtask={isSubtask}
                        maxTotalNeededHours={maxTotalNeededHours}
                    />
                    {task.subtasks ?
                        <TasksBlock
                            tasks={task.subtasks}
                            isSubtask={true}
                            maxTotalNeededHours={maxTotalNeededHours}
                        /> : null
                    }
                </div>
            )
        )}
    </div>
)

export default TasksBlock
