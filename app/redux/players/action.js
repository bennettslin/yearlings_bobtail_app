// Actions for players values.
import { PLAYERS_STORE } from '../../constants/store'

export const updateCanPlayThroughForSong = songIndex => ({
    type: PLAYERS_STORE,
    payload: { songIndex },
})
