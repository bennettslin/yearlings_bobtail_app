import React from 'react';
import TasksBlock from './tasks-block.jsx';
import ProgressFooter from '../progress/progress-footer.jsx';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const TasksSection = (props) => {

    const { tasks } = props,

        maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromTasks(tasks),
        sumTask = ProgressHelper.calculateSumTask(tasks);

    return (
        <TasksSectionView {...props}
            maxTotalNeededHours={maxTotalNeededHours}
            sumTask={sumTask}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const TasksSectionView = ({

    // From props.
    tasks,

    // From controller.
    maxTotalNeededHours,
    sumTask

}) => (

    <div className="section tasks-section">
        <h2>tasks</h2>
        <TasksBlock
            tasks={tasks}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div className="row">
            <ProgressFooter
                sumTask={sumTask}
            />
        </div>
    </div>
);

export default TasksSection;