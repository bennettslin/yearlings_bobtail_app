import { getSongsAndLoguesCount } from 'helpers/data'
import { getArrayOfLength } from 'helpers/general'

import {
    adminGatherDrawings,
    _adminFinaliseActors
} from './helper'

const
    drawings = {},
    songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

songIndicesArray.forEach(songIndex => {
    adminGatherDrawings(drawings, songIndex)
})

_adminFinaliseActors(drawings)

export default drawings
