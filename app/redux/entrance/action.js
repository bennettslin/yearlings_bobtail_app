// Actions for lyric and carousel state.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { ENTRANCE_STORE } from '../../constants/store'

export const updateEntranceStore = payload => ({
    type: ENTRANCE_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const updateTheatreEntrance = (canTheatreEnter = false) => ({
    type: ENTRANCE_STORE,
    payload: { canTheatreEnter }
})
