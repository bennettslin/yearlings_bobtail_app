import React from 'react';
import DevProgressBar from './dev-progress-bar.jsx';

const ProgressManager = require('../helpers/progress-manager.js');

export default class DevProgressField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            maxTotalNeededHours: 0
        };
    }

    componentWillMount() {
        const maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromTasks(this.props.tasks);

        this.setState({
            maxTotalNeededHours
        });
    }

    componentWillUpdate(nextProps) {
        const maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromTasks(nextProps.tasks);

        this.setState({
            maxTotalNeededHours
        });
    }

    _getProgressBar(task) {
        return (
            <DevProgressBar
                sumTask={task}
                maxTotalNeededHours={this.state.maxTotalNeededHours}
            />
        );
    }

    _getTaskSubrow(task, taskIndex, isSubtask) {
        var className = isSubtask ? 'dev-subtask-subrow' : 'dev-task-subrow';
        return (
            <div key={taskIndex} className={className}>
                {this._getProgressBar(task)}
                <div className="dev-task-text-wrapper">
                    <span className="text-cell name">
                        {task.taskName}
                    </span>
                    {task.neededHours ?
                        <span className="text-cell progress">
                            {task.workedHours}/{task.neededHours}
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
                <div className="dev-subtask-row">
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
                <div key={taskIndex} className="dev-task-row">
                    {taskSubrow}
                    {subtaskRow}
                </div>
            );
        }, this);
    }

    render() {
        var tasks = this.props.tasks,
            taskRows = this._getTaskRows(tasks),
            sumTask = ProgressManager.calculateSumTask(tasks),
            taskFooter = (
                <div key="footer" className="dev-task-row">
                    <div className="dev-task-subrow">
                        <div className="dev-task-text-wrapper">
                            <span className="task-placeholder"></span>
                            {sumTask.neededHours ?
                                <h3 className="text-cell progress">
                                    {sumTask.workedHours}/{sumTask.neededHours}
                                </h3> : null
                            }
                        </div>
                    </div>
                </div>
            );

        return (
            <div className="dev-progress-field">
                <h2>progress</h2>
                {taskRows}
                {taskFooter}
            </div>
        );
    }
}

DevProgressField = {
    tasks: []
}