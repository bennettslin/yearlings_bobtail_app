import React from 'react';
import ProgressBar from './progress-bar.jsx';
import GlobalHelper from '../helpers/global-helper.js';
import ProgressHelper from '../helpers/progress-helper.jsx';

const defaultProps = {
    tasks: []
};

class ProgressSection extends React.Component {

    componentWillMount() {
        this._setMaxTotalNeededHours(this.props.tasks);
    }

    componentWillUpdate(nextProps) {
        if (!GlobalHelper.areObjectsEqual(this.props.tasks, nextProps.tasks)) {
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

    _getTaskSubrow(task, taskIndex, isSubtask) {
        const className = isSubtask ? 'subtask-subrow' : 'task-subrow';
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

    _getSubtaskRow(subtasks) {
        if (subtasks) {
            const subtaskSubrows = subtasks.map((subtask, subtaskIndex) => {
                    return this._getTaskSubrow(subtask, subtaskIndex, true);
                });

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
        return tasks.map((task, taskIndex) => {
            const taskSubrow = this._getTaskSubrow(task, taskIndex, false),
                subtaskRow = this._getSubtaskRow(task.subtasks);

            return (
                <div key={taskIndex} className="task-row">
                    {taskSubrow}
                    {subtaskRow}
                </div>
            );
        });
    }

    render() {
        const tasks = this.props.tasks,
            taskRows = this._getTaskRows(tasks),
            sumTask = ProgressHelper.calculateSumTask(tasks),
            progressFooterContent = ProgressHelper.getProgressFooterContent(sumTask, 2),
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