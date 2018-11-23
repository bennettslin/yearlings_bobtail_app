// Reducers for audio values.
import { AUDIO_STORE } from '../storeKeys'
import { AUDIO_DEFAULTS } from '../defaultStates'

export default (
    state = AUDIO_DEFAULTS,
    action
) => {
    switch (action.type) {
        case AUDIO_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
