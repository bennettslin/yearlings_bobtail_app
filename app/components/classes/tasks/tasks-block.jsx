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
    const className = 'block '+ (isSubtask ? 'subtask-block' : 'task-block');
    return (
        <div className={className}>
            {tasks.map((task, taskIndex) => {
                return (
                    <TaskRow
                        key={taskIndex}
                        task={task}
                        taskIndex={taskIndex}
                        isSubtask={isSubtask}
                        maxTotalNeededHours={maxTotalNeededHours}
                    />
                );
            })}
        </div>
    );
};

export default TasksBlock;