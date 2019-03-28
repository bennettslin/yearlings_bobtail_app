import isNumber from 'lodash.isnumber'
import tasks from 'album/tasks'
import tasksV2 from 'album/tasks/v2'
import albumTasks from 'album/tasks/songs'

export const getAllTasks = () => (
    tasks
)

export const getAllTasksV2 = () => (
    tasksV2
)

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
    if (isNumber(task.workedHours)) {
        sumTasks.workedHours += task.workedHours
    }
    if (isNumber(task.neededHours)) {
        sumTasks.neededHours += task.neededHours
    }
}
