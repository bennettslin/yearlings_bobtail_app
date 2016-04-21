import React from 'react';
import ProgressBar from './progress-bar.jsx';
import GlobalHelper from '../helpers/global-helper.js';
import ProgressHelper from '../helpers/progress-helper.jsx';

const defaultProps = {
    tasks: []
};

class ProgressSection extends React.Component {

    componentWillMount() {
        const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromTasks(this.props.tasks);

        this.setState({
            maxTotalNeededHours
        });
    }

    componentWillUpdate(nextProps) {
        if (!GlobalHelper.areObjectsEqual(this.props.tasks, nextProps.tasks)) {
            const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromTasks(nextProps.tasks);

            this.setState({
                maxTotalNeededHours
            });
        }
    }

    _getProgressBar(task) {
        return (
            <ProgressBar
                sumTask={task}
                maxTotalNeededHours={this.state.maxTotalNeededHours}
            />
        );
    }

    _getTaskSubrow(task, taskIndex, isSubtask) {
        var className = isSubtask ? 'subtask-subrow' : 'task-subrow';
        return (
            <div key={taskIndex} className={className}>
                {this._getProgressBar(task)}
                <div className="task-text-wrapper">
                    <span className="text-cell name">
                        {task.taskName}
                    </span>
                    {task.neededHours ?
                        <span className="text-cell progress">
                            {task.workedHours}/{task.neededHours}h
                        </span> : null
                    }
                </div>
            </div>
        );
    }

    _getSubtaskRow(subtasks) {
        if (subtasks) {
            var subtaskSubrows = subtasks.map(function(subtask, subtaskIndex) {
                    return this._getTaskSubrow(subtask, subtaskIndex, true);
                }, this);

            return (
                <div className="subtask-row">
                    {subtaskSubrows}
                </div>
            );

        } else {
            return null;
        }
    }

    _getTaskRows(tasks) {
        return tasks.map(function(task, taskIndex) {
            var taskSubrow = this._getTaskSubrow(task, taskIndex, false),
                subtaskRow = this._getSubtaskRow(task.subtasks);

            return (
                <div key={taskIndex} className="task-row">
                    {taskSubrow}
                    {subtaskRow}
                </div>
            );
        }, this);
    }

    render() {
        var tasks = this.props.tasks,
            taskRows = this._getTaskRows(tasks),
            sumTask = ProgressHelper.calculateSumTask(tasks),
            progressFooterContent = ProgressHelper.getProgressFooterContent(sumTask, 2),
            taskFooter;

        taskFooter = (
            <div key="footer" className="task-row">
                <div className="task-subrow">
                    {progressFooterContent}
                </div>
            </div>
        );

        return (
            <div className="progress-section">
                <h2>progress</h2>
                {taskRows}
                {taskFooter}
            </div>
        );
    }
}

ProgressSection.defaultProps = defaultProps;
export default ProgressSection;