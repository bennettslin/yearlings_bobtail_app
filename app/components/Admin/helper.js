import tasks from 'album/tasks'
import songTasks from 'album/tasks/songs'

export const getAllTasks = () => (
    tasks
)

export const getSongTasks = (songIndex) => (
    songTasks[songIndex]
)
