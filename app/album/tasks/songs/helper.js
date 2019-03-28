import drawings from 'album/drawings'
import { getIsV2 } from 'album/api/admin'

export const addDrawingTasksToSongTasks = (songTasksArray) => {

    songTasksArray.forEach((songTasks, songIndex) => {
        if (!getIsV2(songIndex)) {
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
        }
    })
}

export const addDrawingTasksToSongTasksV2 = (songTasksArrayV2) => {

    [10, 11, 12, 13, 14, 15, 16, 17, 18].forEach(songIndex => {
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
            songTasksArrayV2.push(drawingActorsTask)
        }

        delete songDrawingTasks.actorsWorkedHours
        delete songDrawingTasks.actorsNeededHours
    })
}
