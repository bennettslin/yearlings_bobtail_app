// Reducers for audio updates.
import { AUDIO_STORE } from '../../constants/store'
import { AUDIO_DEFAULTS } from './default'

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
