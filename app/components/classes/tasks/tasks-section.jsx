import React from 'react';
import TasksBlock from './tasks-block.jsx';
import ProgressFooter from '../progress/progress-footer.jsx';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const TasksSection = ({
    tasks
}) => {
    const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromTasks(tasks),
        sumTask = ProgressHelper.calculateSumTask(tasks);
    return (
        <TasksSectionView
            tasks={tasks}
            maxTotalNeededHours={maxTotalNeededHours}
            sumTask={sumTask}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const TasksSectionView = ({
    tasks,
    maxTotalNeededHours,
    sumTask
}) => (
    <div className="section tasks-section">
        <h2>tasks</h2>
        <TasksBlock
            tasks={tasks}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div key="footer" className="block task-block">
            <div className="row">
                <ProgressFooter
                    sumTask={sumTask}
                />
            </div>
        </div>
    </div>
);

export default TasksSection;