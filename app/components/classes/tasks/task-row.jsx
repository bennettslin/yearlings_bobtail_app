import React from 'react';
import ProgressBar from '../progress/progress-bar.jsx';

/*************
 * CONTAINER *
 *************/

const TaskRow = (props) => {
    const className = 'row ' + (props.isSubtask ? 'secondary-row' : 'primary-row');
    return (
        <TaskRowView {...props}
            className={className}
        />
    );
};


/********
 * VIEW *
 ********/

const TaskRowView = ({
    task,
    taskIndex,
    maxTotalNeededHours,
    className
}) => (
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
);

export default TaskRow;