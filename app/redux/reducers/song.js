// Reducers for song and player state.
import { SONG_STORE } from 'constants/state'
import { SONG_DEFAULTS } from '../defaultStates'

export const SongStoreReducer = (
    state = SONG_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SONG_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
