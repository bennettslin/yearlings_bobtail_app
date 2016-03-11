var DevProgressField = React.createClass({

    _maxTotalNeededHours: 0,

    getDefaultProps: function() {
        return {
            tasks: []
        };
    },

    componentWillMount: function() {
        this._maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromTasks(this.props.tasks);
    },

    _getTaskSubrow: function(task, taskIndex) {
        return (
            <div key={taskIndex} className="dev-task-subrow">
                <DevProgressBar
                    sumTask={task}
                    maxTotalNeededHours={this._maxTotalNeededHours}
                />
                <span className="name">
                    {task.taskName}
                </span>
                {task.neededHours ?
                    <span className="progress">
                        {task.workedHours}/{task.neededHours}
                    </span> : null
                }
            </div>
        );
    },

    _getSubtaskSubrow: function(subtask, subtaskIndex) {
        return (
            <div key={subtaskIndex} className="dev-subtask-subrow">
                <DevProgressBar
                    sumTask={subtask}
                    maxTotalNeededHours={this._maxTotalNeededHours}
                />
                <span className="name">
                    {subtask.taskName}
                </span>
                <span className="progress">
                    {subtask.workedHours}/{subtask.neededHours}
                </span>
            </div>
        );
    },

    _getSubtaskRow: function(subtasks) {
        if (subtasks) {
            var subtaskSubrows = subtasks.map(function(subtask, subtaskIndex) {
                    return this._getSubtaskSubrow(subtask, subtaskIndex);
                }, this);

            return (
                <div className="dev-subtask-row">
                    {subtaskSubrows}
                </div>
            );

        } else {
            return null;
        }
    },

    render: function() {
        var tasks = this.props.tasks,
            sumTask = ProgressManager.calculateSumTask(tasks);
            taskRows = tasks.map(function(task, taskIndex) {
                var taskSubrow = this._getTaskSubrow(task, taskIndex),
                    subtaskRow = this._getSubtaskRow(task.subtasks);

                return (
                    <div key={taskIndex} className="dev-task-row">
                        {taskSubrow}
                        {subtaskRow}
                    </div>
                );
            }, this),
            sumTask = ProgressManager.calculateSumTask(tasks);

        // Add sum of progress in footer.
        taskRows.push(
            <div key="footer" className="dev-task-row">
                <div className="dev-task-subrow">
                    <span className="name"></span>
                    {sumTask.neededHours ?
                        <h3 className="progress">
                            {sumTask.workedHours}/{sumTask.neededHours}
                        </h3> : null
                    }
                </div>
            </div>
        );

        return (
            <div className="dev-progress-field">
                <h2>progress</h2>
                {taskRows}
            </div>
        );
    }
});