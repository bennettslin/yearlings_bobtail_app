import drawings from '../../../../album/drawings'

export const addDrawingTasksToSongTasks = (songTasksArray) => {

    songTasksArray.forEach((songTasks, songIndex) => {
        const
            songDrawingTasks = drawings.songTasks[songIndex],
            {
                actorsWorkedHours,
                actorsNeededHours
            } = songDrawingTasks,

            drawingActorsTask = {
                taskName: 'Drawings of actors',
                workedHours: actorsWorkedHours,
                neededHours: actorsNeededHours
            }

        if (actorsNeededHours) {
            songTasks.push(drawingActorsTask)
        }

        delete songDrawingTasks.actorsWorkedHours
        delete songDrawingTasks.actorsNeededHours
    })
}
