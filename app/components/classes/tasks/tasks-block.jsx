import React from 'react';
import TaskRow from './task-row.jsx';

/*************
 * CONTAINER *
 *************/

const TasksBlock = (props) => (
    <TasksBlockView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const TasksBlockView = ({
    tasks,
    isSubtask,
    maxTotalNeededHours
}) => (
    <div className={isSubtask ? 'subtask-block' : 'task-block'}>
        {tasks.map((task, taskIndex) => {
            return (
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
            );
        })}
    </div>
);

export default TasksBlock;