// Reducers for audio updates.
import { AUDIO_STORE } from '../../constants/store'
import { AUDIO_DEFAULTS } from './default'

export default (
    state = AUDIO_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case AUDIO_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
