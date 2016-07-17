import React from 'react';
import TasksBlock from './tasks-block.jsx';
import ProgressBar from '../progress/progress-bar.jsx';

/*************
 * CONTAINER *
 *************/

const TaskRow = (props) => (
    <TaskRowView {...props} />
);

/********
 * VIEW *
 ********/

const TaskRowView = ({
    task,
    taskIndex,
    isSubtask = false,
    maxTotalNeededHours
}) => {
    const className = 'row ' + (isSubtask ? 'secondary-row' : 'primary-row');
    return (
        <div>
            <div key={taskIndex} className={className}>
                <ProgressBar
                    sumTask={task}
                    maxTotalNeededHours={maxTotalNeededHours}
                />
                <div className="text-cell-wrapper">
                    <span className="text-cell text">
                        {task.taskName}
                    </span>
                    {task.neededHours ?
                        <span className="text-cell figure">
                            {task.workedHours}/{task.neededHours}h
                        </span> : null
                    }
                </div>
            </div>
            {task.subtasks ?
                <TasksBlock
                    tasks={task.subtasks}
                    isSubtask={true}
                    maxTotalNeededHours={maxTotalNeededHours}
                /> : null
            }
        </div>
    );
};

export default TaskRow;