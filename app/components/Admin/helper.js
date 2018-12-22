import album from 'album'
import tasks from 'album/tasks'

export const getAllTaskObjects = (songs = album.songs) => {
    const allTaskObjects = songs.map(song => song.tasks)

    allTaskObjects.push(tasks)

    return allTaskObjects
}
