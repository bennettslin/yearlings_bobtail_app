// Actions for players values.
import { PLAYERS_STORE } from '../../constants/store'

export const updateCanPlayThrough = canPlayThrough => ({
    type: PLAYERS_STORE,
    payload: { canPlayThrough },
})
