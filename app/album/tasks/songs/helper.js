import drawings from 'album/drawings'

export const addDrawingTasksToSongTasks = (songTasksArray) => {

    songTasksArray.forEach((songTasks, songIndex) => {
        const
            drawingTasks = drawings.songs[songIndex],
            {
                actorsWorkedHours,
                actorsNeededHours
            } = drawingTasks

        if (actorsNeededHours) {
            songTasks.push({
                taskName: 'Drawings of actors',
                workedHours: actorsWorkedHours,
                neededHours: actorsNeededHours
            })
        }

        delete drawingTasks.actorsWorkedHours
        delete drawingTasks.actorsNeededHours
    })
}
