// Reducers for queued song values.
import { SONG_QUEUE_STORE } from '../storeKeys'
import { SONG_QUEUE_DEFAULTS } from '../defaultStates'

export default (
    state = SONG_QUEUE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SONG_QUEUE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
