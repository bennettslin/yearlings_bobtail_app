import React from 'react';

module.exports = {

    /**********
     * MARKUP *
     **********/

    getProgressFooterContent: function(sumTask, fontSize) {
        var workedHours = sumTask.workedHours,
            neededHours = sumTask.neededHours,
            remainingHours = neededHours - workedHours,
            remainingTimeString = this.getRemainingTimeStringFromHours(remainingHours);

        return (
            <div className="task-text-wrapper footer">
                {neededHours ?
                    <div className={'text-cell progress font-size-' + fontSize}>
                        <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                        <div>{remainingTimeString}</div>
                    </div> : null
                }
            </div>
        );
    },

    /***********
     * UTILITY *
     ***********/

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
    },

    _getRemainingTimeFromHours: function(hours) {
        /**
         * Assume 3 hours per weekday, and 15 hours per weekend.
         * So each week is 30 hours, so on average each day is
         * 4.3 hours.
         */
        var HOURS_IN_DAY = 30 / 7,
            DAYS_IN_WEEK = 7,
            DAYS_IN_MONTH = 365 / 12,
            totalDays = hours / HOURS_IN_DAY,
            totalMonths = Math.floor(totalDays / DAYS_IN_MONTH),
            remainingWeeks = Math.floor((totalDays - (totalMonths * DAYS_IN_MONTH)) / DAYS_IN_WEEK),
            remainingDays = Math.ceil(totalDays - (totalMonths * DAYS_IN_MONTH) - (remainingWeeks * DAYS_IN_WEEK));

        return {
            months: totalMonths,
            weeks: remainingWeeks,
            days: remainingDays
        };
    },

    getRemainingTimeStringFromHours: function(hours) {
        var remainingTimeObject = this._getRemainingTimeFromHours(hours),
            months = remainingTimeObject.months,
            weeks = remainingTimeObject.weeks,
            days = remainingTimeObject.days;

        return (months ? months + 'm' : '') +
               (months && weeks ? ', ' : '') +
               (weeks ? weeks + 'w' : '') +
               ((months || weeks) && days ? ', ' : '') +
               (days ? days + 'd' : '');
    }
}