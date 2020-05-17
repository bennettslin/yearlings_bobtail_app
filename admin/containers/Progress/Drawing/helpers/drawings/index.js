import { getSongsAndLoguesCount } from '../../../../../../app/album/api/songs'
import { getArrayOfLength } from '../../../../../../app/helpers/general'

import {
    initialiseDrawings,
    addActorTasksToSongDrawingTasks
} from './helper'

const drawings = {}

getArrayOfLength(getSongsAndLoguesCount()).forEach(songIndex => {
    initialiseDrawings(drawings, songIndex)
})

addActorTasksToSongDrawingTasks(drawings)

export default drawings
