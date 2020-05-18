import albumTasks from '../../../../tasks/completed/songs'

export const getSongTasks = songIndex => (
    albumTasks[songIndex]
)
