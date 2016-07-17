import React from 'react';
import TaskRow from './task-row.jsx';

/*************
 * CONTAINER *
 *************/

const TasksBlock = (props) => (
    <TasksBlockView {...props} />
);

/********
 * VIEW *
 ********/

const TasksBlockView = ({
    tasks,
    isSubtask = false,
    maxTotalNeededHours
}) => {
    const className = isSubtask ? 'subtask-block' : 'task-block';
    return (
        <div className={className}>
            {tasks.map((task, taskIndex) => {
                return (
                    <div
                        key={taskIndex}
                        className="block-unit"
                    >
                        <TaskRow
                            task={task}
                            taskIndex={taskIndex}
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
};

export default TasksBlock;