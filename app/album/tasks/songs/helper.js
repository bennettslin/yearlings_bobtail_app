import drawings from 'album/drawings'

export const addDrawingTasksToSongTasks = (songTasksArray) => {

    songTasksArray.forEach((songTasks, songIndex) => {
        const
            songDrawingTasks = drawings.songTasks[songIndex],
            {
                actorsWorkedHours,
                actorsNeededHours
            } = songDrawingTasks

        if (actorsNeededHours) {
            songTasks.push({
                taskName: 'Drawings of actors',
                workedHours: actorsWorkedHours,
                neededHours: actorsNeededHours
            })
        }

        delete songDrawingTasks.actorsWorkedHours
        delete songDrawingTasks.actorsNeededHours
    })
}
