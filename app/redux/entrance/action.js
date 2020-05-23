// Actions for lyric and carousel state.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { ENTRANCE_STORE } from '../../constants/store'

import { THEATRE_ENTRANCE_DEFAULTS } from './default'

export const updateEntranceStore = payload => ({
    type: ENTRANCE_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetTheatreEntrance = () => ({
    type: ENTRANCE_STORE,
    payload: THEATRE_ENTRANCE_DEFAULTS
})
