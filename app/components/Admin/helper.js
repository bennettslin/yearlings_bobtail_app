import tasks from 'album/tasks'
import allSongTasks from 'album/tasks/songs'

export const getAllTasks = () => (
    tasks
)

export const getSongTasks = (songIndex) => (
    allSongTasks[songIndex]
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
    if (!isNaN(task.workedHours)) {
        sumTasks.workedHours += task.workedHours
    }
    if (!isNaN(task.neededHours)) {
        sumTasks.neededHours += task.neededHours
    }
}
