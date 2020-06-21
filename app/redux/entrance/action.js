import { ENTRANCE_STORE } from '../../constants/store'

export const updateTheatreEntrance = (canTheatreEnter = false) => ({
    type: ENTRANCE_STORE,
    payload: { canTheatreEnter }
})
