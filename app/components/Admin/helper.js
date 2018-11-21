import album from 'server/album'

export const getAllTaskObjects = (songs = album.songs) => {
    const { tasks } = album,
        allTaskObjects = songs.map(song => song.tasks)

    allTaskObjects.push(tasks)

    return allTaskObjects
}
