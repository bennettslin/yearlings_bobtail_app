// Actions for lyric and carousel state.
import { ENTRANCE_STORE } from '../../constants/store'

export const updateTheatreEntrance = (canTheatreEnter = false) => ({
    type: ENTRANCE_STORE,
    payload: { canTheatreEnter }
})
