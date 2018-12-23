import { getSongsAndLoguesCount } from 'album/api/songs'
import { getArrayOfLength } from 'helpers/general'

import {
    initialiseDrawings,
    addActorTasksToSongDrawingTasks
} from './helper'

const
    drawings = {},
    songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

songIndicesArray.forEach(songIndex => {
    initialiseDrawings(drawings, songIndex)
})

addActorTasksToSongDrawingTasks(drawings)

export default drawings
