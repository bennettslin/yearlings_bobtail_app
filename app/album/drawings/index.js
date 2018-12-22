import { getSongsAndLoguesCount } from 'helpers/data'
import { getArrayOfLength } from 'helpers/general'

import {
    adminGatherDrawings,
    _adminFinaliseActors,
    adminRegisterDrawingTasks
} from './helper'

const
    drawings = {},
    songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

songIndicesArray.forEach(songIndex => {
    adminGatherDrawings(drawings, songIndex)
})

_adminFinaliseActors(drawings)

songIndicesArray.forEach(songIndex => {
    adminRegisterDrawingTasks(drawings, songIndex)
})

export default drawings
