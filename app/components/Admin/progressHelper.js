// For dev purposes. Calculate progress completed and left to do on tasks.

import drawings from 'album/drawings'

import { getSongsAndLoguesCount } from 'helpers/data'
import { getArrayOfLength } from 'helpers/general'

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

    getMaxTotalNeededHoursFromSongs() {
        const { songs } = drawings,
            songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

        return songIndicesArray.reduce((maxTotalNeededHours, songIndex) => {
            const song = songs[songIndex]

            const totalNeededHours = this.getSumOfTasks(song.tasks).neededHours
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

    getSumOfTasks(tasks = []) {
        const sumTasks = {
            workedHours: 0,
            neededHours: 0
        }

        tasks.forEach(task => {
            this._addTaskToSum(sumTasks, task)
            if (Array.isArray(task.subtasks)) {
                task.subtasks.forEach(subtask => {
                    this._addTaskToSum(sumTasks, subtask)
                })
            }
        })

        return sumTasks
    },

    _addTaskToSum(sumTasks, task) {
        if (!isNaN(task.workedHours)) {
            sumTasks.workedHours += task.workedHours
        }
        if (!isNaN(task.neededHours)) {
            sumTasks.neededHours += task.neededHours
        }
    }
}
