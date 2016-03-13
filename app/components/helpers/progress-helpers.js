module.exports = {

    getMaxTotalNeededHoursFromSongs: function(songs) {
        return songs.reduce(function(maxTotalNeededHours, song) {
            var totalNeededHours = this.calculateSumTask(song.tasks).neededHours;
            return Math.max(totalNeededHours, maxTotalNeededHours);
        }.bind(this), 0);
    },

    getMaxTotalNeededHoursFromTasks: function(tasks) {
        return tasks.reduce(function(maxTotalNeededHours, task) {
            var maxFromTask = task.neededHours;

            if (task.subtasks) {
                var maxFromSubtasks = this.getMaxTotalNeededHoursFromTasks(task.subtasks);
                maxFromTask = Math.max(maxFromSubtasks, maxFromTask);
            }

            return Math.max(maxTotalNeededHours, maxFromTask);
        }.bind(this), 0);
    },

    calculateSumTask: function(tasks) {
        var sumTask = {
                workedHours: 0,
                neededHours: 0
            };

        if (!tasks) {
            return sumTask;

        } else {
            return tasks.reduce(function(sumTask, task) {

                // Calculate sum of subtasks, if there are any.
                if (task.subtasks) {
                    var sumSubtask = this.calculateSumTask(task.subtasks);
                    task = this._addTwoTasks(sumSubtask, task);
                }

                return this._addTwoTasks(sumTask, task);
            }.bind(this), sumTask);
        }
    },

    calculateSumAllTasks: function(songs) {
        var sumAllTasks = {
                workedHours: 0,
                neededHours: 0
            };

        return songs.reduce(function(sumAllTasks, song) {
            return this._addTwoTasks(sumAllTasks, this.calculateSumTask(song.tasks));
        }.bind(this), sumAllTasks);
    },

    _addTwoTasks: function(task1, task2) {
        if (!task1) {
            return task2;

        } else if (!task2) {
            return task1;

        } else {
            return {
                workedHours: task1.workedHours + task2.workedHours,
                neededHours: task1.neededHours + task2.neededHours
            };
        }
    }
}