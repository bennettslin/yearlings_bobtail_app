import albumTasks from '../../../tasks/completed/songs'
import tasks from '../../../tasks'
import tasksV2 from '../../../tasks/v2'

export const getAllTasks = () => tasks
export const getAllTasksV2 = () => tasksV2

export const getSongTasks = songIndex => (
    albumTasks[songIndex]
)
