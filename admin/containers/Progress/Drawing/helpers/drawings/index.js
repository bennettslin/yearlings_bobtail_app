import { getSongsAndLoguesCount } from '../../../../../../src/endpoint/album/songs'
import { getArrayOfLength } from '../../../../../../src/helpers/general'

import {
    initialiseDrawings,
    addActorTasksToSongDrawingTasks,
} from './helper'

const drawings = {}

getArrayOfLength(getSongsAndLoguesCount()).forEach(songIndex => {
    initialiseDrawings(drawings, songIndex)
})

addActorTasksToSongDrawingTasks(drawings)

export default drawings
