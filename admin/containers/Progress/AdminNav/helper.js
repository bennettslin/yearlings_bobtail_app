import albumTasks from '../../../tasks/completed/songs'
import tasks from '../../../tasks'
import tasksV2 from '../../../tasks/v2'

export const getSongTasks = songIndex => (
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
    if (Number.isFinite(task.workedHours)) {
        sumTasks.workedHours += task.workedHours

        // Completed tasks do not have needed hours.
        if (!Number.isFinite(task.neededHours)) {
            task.neededHours = task.workedHours
        }

        sumTasks.neededHours += task.neededHours
    }

}

export const getAllTasks = () => (
    tasks
)

export const getAllTasksV2 = () => (
    tasksV2
)

export const getMaxTotalNeededHoursFromSongs = () => (
    albumTasks.reduce((maxTotalNeededHours, songTasks) => {

        const totalNeededHours = getSumOfTasks(songTasks).neededHours
        return Math.max(totalNeededHours, maxTotalNeededHours)
    }, 0)
)
