import React from 'react';

module.exports = {

    /**********
     * MARKUP *
     **********/

    getProgressFooterContent: function(sumTask = 0, fontSize = 1) {
        const workedHours = sumTask.workedHours,
            neededHours = sumTask.neededHours,
            remainingHours = neededHours - workedHours,
            remainingTimeString = this.getRemainingTimeStringFromHours(remainingHours);

        return (
            <div className="text-cell-wrapper">
                {neededHours ?
                    <div className={'text-cell footer font-size-' + fontSize}>
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

    getMaxTotalNeededHoursFromSongs: function(songs = []) {
        return songs.reduce((maxTotalNeededHours, song) => {
            const totalNeededHours = this.calculateSumTask(song.tasks).neededHours;
            return Math.max(totalNeededHours, maxTotalNeededHours);
        }, 0);
    },

    getMaxTotalNeededHoursFromTasks: function(tasks = []) {
        return tasks.reduce((maxTotalNeededHours, task) => {
            let maxFromTask = task.neededHours;

            if (task.subtasks) {
                const maxFromSubtasks = this.getMaxTotalNeededHoursFromTasks(task.subtasks);
                maxFromTask = Math.max(maxFromSubtasks, maxFromTask);
            }

            return Math.max(maxTotalNeededHours, maxFromTask);
        }, 0);
    },

    calculateSumTask: function(tasks = []) {
        const sumTask = {
                workedHours: 0,
                neededHours: 0
            };

        if (tasks.length === 0) {
            return sumTask;

        } else {
            return tasks.reduce((sumTask, task) => {

                // Calculate sum of subtasks, if there are any.
                if (task.subtasks) {
                    const sumSubtask = this.calculateSumTask(task.subtasks);
                    task = this._addTwoTasks(sumSubtask, task);
                }

                return this._addTwoTasks(sumTask, task);
            }, sumTask);
        }
    },

    calculateSumAllTasks: function(songs = []) {
        const sumAllTasks = {
                workedHours: 0,
                neededHours: 0
            };

        return songs.reduce((sumAllTasks, song) => {
            return this._addTwoTasks(sumAllTasks, this.calculateSumTask(song.tasks));
        }, sumAllTasks);
    },

    _addTwoTasks: function(task1 = {}, task2 = {}) {
        return {
            workedHours: (task1.workedHours || 0) +
                (task2.workedHours || 0),
            neededHours: (task1.neededHours || 0) +
                (task2.neededHours || 0)
        };
    },

    _getRemainingTimeFromHours: function(hours = 0) {
        /**
         * Assume 3 hours per weekday, and 15 hours per weekend.
         * So each week is 30 hours, so on average each day is
         * 4.3 hours.
         */
        const HOURS_IN_DAY = 30 / 7,
            DAYS_IN_WEEK = 7,
            DAYS_IN_MONTH = 365 / 12,
            totalDays = hours / HOURS_IN_DAY,
            totalMonths = Math.floor(totalDays / DAYS_IN_MONTH),
            remainingWeeks = Math.floor((totalDays - (totalMonths * DAYS_IN_MONTH)) / DAYS_IN_WEEK),
            remainingDays = Math.floor(totalDays - (totalMonths * DAYS_IN_MONTH) - (remainingWeeks * DAYS_IN_WEEK));

        return {
            months: totalMonths,
            weeks: remainingWeeks,
            days: remainingDays
        };
    },

    getRemainingTimeStringFromHours: function(hours = 0) {
        const remainingTimeObject = this._getRemainingTimeFromHours(hours),
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