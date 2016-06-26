import React from 'react';
import ProgressBar from './progress-bar.jsx';
import EventHelper from '../helpers/event-helper.js';
import ProgressHelper from '../helpers/progress-helper.js';
import ProgressUtility from '../utilities/progress-utility.jsx';

const defaultProps = {
    tasks: []
};

class TasksSection extends React.Component {

    componentWillMount() {
        this._setMaxTotalNeededHours(this.props.tasks);
    }

    componentWillUpdate(nextProps) {
        if (!ProgressHelper.areObjectsEqual(this.props.tasks, nextProps.tasks)) {
            this._setMaxTotalNeededHours(nextProps.tasks);
        }
    }

    _setMaxTotalNeededHours(tasks) {
        const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromTasks(tasks);

        this.setState({
            maxTotalNeededHours
        });
    }

    _getProgressBar(task) {
        return (
            <ProgressBar
                sumTask={task}
                maxTotalNeededHours={this.state.maxTotalNeededHours}
            />
        );
    }

    _getTaskRow(task, taskIndex, isSubtask) {
        const className = 'row ' + (isSubtask ? 'secondary-row' : 'primary-row');
        return (
            <div key={taskIndex} className={className}>
                {this._getProgressBar(task)}
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
    }

    _getSubtaskBlock(subtasks) {
        if (subtasks) {
            const subtaskRows = subtasks.map((subtask, subtaskIndex) => {
                    return this._getTaskRow(subtask, subtaskIndex, true);
                });

            return (
                <div className="subtask-block">
                    {subtaskRows}
                </div>
            );

        } else {
            return null;
        }
    }

    _getTaskBlocks(tasks) {
        return tasks.map((task, taskIndex) => {
            const taskRow = this._getTaskRow(task, taskIndex, false),
                subtaskBlock = this._getSubtaskBlock(task.subtasks);

            return (
                <div key={taskIndex} className="task-block">
                    {taskRow}
                    {subtaskBlock}
                </div>
            );
        });
    }

    render() {
        const tasks = this.props.tasks,
            taskRows = this._getTaskBlocks(tasks),
            sumTask = ProgressHelper.calculateSumTask(tasks),
            progressFooterContent = ProgressUtility.getProgressFooterContent(sumTask, 2),
            taskFooter = (
                <div key="footer" className="task-block">
                    <div className="row">
                        {progressFooterContent}
                    </div>
                </div>
            );

        return (
            <div className="section tasks-section">
                <h2>tasks</h2>
                {taskRows}
                {taskFooter}
            </div>
        );
    }
}

TasksSection.defaultProps = defaultProps;
export default TasksSection;