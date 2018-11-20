// For dev purposes. Calculate progress completed and left to do on tasks.

import {
    addDays, format
} from 'date-fns'

/**
 * Assume 3 hours per weekday, and 15 hours per weekend.
 * So each week is 30 hours, so on average each day is
 * 4.3 hours.
 */
const WORK_HOURS_IN_DAY = 36 / 7,
    DAYS_IN_WEEK = 7,
    DAYS_IN_MONTH = 365 / 12

export default {

    hasRemainingHours(task) {
        const {
            workedHours,
            neededHours,
            subtasks
        } = task
        return workedHours < neededHours ||
            (subtasks && subtasks.reduce((hasRemainingHours, subtask) => {
                const {
                    workedHours,
                    neededHours
                } = subtask
                return workedHours < neededHours || hasRemainingHours
            }, false))
    },

    getMaxTotalNeededHoursFromSongs(songs = []) {
        return songs.reduce((maxTotalNeededHours, song) => {
            const totalNeededHours = this.calculateSumTask(song.tasks).neededHours
            return Math.max(totalNeededHours, maxTotalNeededHours)
        }, 0)
    },

    getMaxTotalNeededHoursFromTasks(tasks = []) {
        return tasks.reduce((maxTotalNeededHours, task) => {
            let maxFromTask = task.neededHours

            if (task.subtasks) {
                const maxFromSubtasks = this.getMaxTotalNeededHoursFromTasks(task.subtasks)
                maxFromTask = Math.max(maxFromSubtasks, maxFromTask)
            }

            return Math.max(maxTotalNeededHours, maxFromTask)
        }, 0)
    },

    calculateSumTask(tasks = []) {
        const sumTask = {
            workedHours: 0,
            neededHours: 0
        }

        if (tasks.length === 0) {
            return sumTask

        } else {
            return tasks.reduce((sumTask, task) => {

                // Calculate sum of subtasks, if there are any.
                if (task.subtasks) {
                    const sumSubtask = this.calculateSumTask(task.subtasks)
                    task = this._addTwoTasks(sumSubtask, task)
                }

                return this._addTwoTasks(sumTask, task)
            }, sumTask)
        }
    },

    calculateSumAllTasks(allTasks = []) {
        const sumAllTasks = {
            workedHours: 0,
            neededHours: 0
        }

        return allTasks.reduce((sumAllTasks, tasks) => {
            return this._addTwoTasks(sumAllTasks, this.calculateSumTask(tasks))
        }, sumAllTasks)
    },

    _addTwoTasks(task1 = {}, task2 = {}) {
        return {
            workedHours: (task1.workedHours || 0) +
                (task2.workedHours || 0),
            neededHours: (task1.neededHours || 0) +
                (task2.neededHours || 0)
        }
    },

    _getRemainingTimeFromHours(hours = 0) {
        const totalDays = hours / WORK_HOURS_IN_DAY,
            totalMonths = Math.floor(totalDays / DAYS_IN_MONTH),
            remainingWeeks = Math.floor((totalDays - (totalMonths * DAYS_IN_MONTH)) / DAYS_IN_WEEK),
            remainingDays = Math.floor(totalDays - (totalMonths * DAYS_IN_MONTH) - (remainingWeeks * DAYS_IN_WEEK))

        return {
            months: totalMonths,
            weeks: remainingWeeks,
            days: remainingDays
        }
    },

    getNextCheckInDateFromHours(hours = 0, raw) {
        const totalDays = hours / WORK_HOURS_IN_DAY,
            today = new Date(),
            finishDate = addDays(today, totalDays)

        return raw ? finishDate : format(finishDate, 'MMM D, YYYY')
    },

    getRemainingTimeStringFromHours(hours = 0) {
        const remainingTimeObject = this._getRemainingTimeFromHours(hours),
            {
                months,
                weeks,
                days
            } = remainingTimeObject

        if (!months && !weeks && !days) {
            return '0d'
        } else {
            return (months ? months + 'm' : '') +
                (months && weeks ? ', ' : '') +
                (weeks ? weeks + 'w' : '') +
                ((months || weeks) && days ? ', ' : '') +
                (days ? days + 'd' : '')
        }
    },

    areObjectsEqual(objects1 = {}, objects2 = {}) {
        // For task purposes.
        return (JSON.stringify(objects1) === JSON.stringify(objects2))
    },

    getBarWidthStyle(numerator, denominator) {
        return (numerator / (denominator || 0.01) * 100) + '%'
    }
}
