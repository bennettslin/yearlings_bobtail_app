import drawings from '../../containers/Progress/drawings'

export const addDrawingTasksToSongTasks = (songTasksArray) => {

    let workedHours = 0,
        neededHours = 0

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

        workedHours += actorsWorkedHours
        neededHours += actorsNeededHours

        delete songDrawingTasks.actorsWorkedHours
        delete songDrawingTasks.actorsNeededHours
    })

    console.log('Worked actor hours:', workedHours)
    console.log('Needed actor hours:', neededHours)
}
