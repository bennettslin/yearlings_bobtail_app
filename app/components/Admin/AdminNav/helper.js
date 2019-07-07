import albumTasks from 'album/tasks/songs'
import tasks from 'album/tasks'
import tasksV2 from 'album/tasks/v2'
import isFinite from 'lodash.isfinite'

export const getSongTasks = (songIndex) => (
    albumTasks[songIndex]
)

export const getSumOfTasks = (tasks = []) => {
    const sumTasks = {
        workedHours: 0,
        neededHours: 0
    }

    tasks.forEach(task => {
        _addTaskToSum(sumTasks, task)
        if (Array.isArray(task.subtasks)) {
            task.subtasks.forEach(subtask => {
                _addTaskToSum(sumTasks, subtask)
            })
        }
    })

    return sumTasks
}

const _addTaskToSum = (sumTasks, task) => {
    if (isFinite(task.workedHours)) {
        sumTasks.workedHours += task.workedHours
    }
    if (isFinite(task.neededHours)) {
        sumTasks.neededHours += task.neededHours
    }
}

export const getAllTasks = () => (
    tasks
)

export const getAllTasksV2 = () => (
    tasksV2
)

export const getMaxTotalNeededHoursFromSongs = () => {

    return albumTasks.reduce((maxTotalNeededHours, songTasks) => {

        const totalNeededHours = getSumOfTasks(songTasks).neededHours
        return Math.max(totalNeededHours, maxTotalNeededHours)
    }, 0)
}
