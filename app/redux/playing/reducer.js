// Reducers for audio updates.
import { PLAYING_STORE } from '../storeKeys'
import { PLAYING_DEFAULTS } from '../defaultStates'

export default (
    state = PLAYING_DEFAULTS,
    action
) => {
    switch (action.type) {
        case PLAYING_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
