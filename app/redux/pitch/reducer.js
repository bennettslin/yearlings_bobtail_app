// Reducers for pitch.
import { PITCH_STORE } from '../../constants/store'
import { PITCH_DEFAULTS } from './default'

export default (
    state = PITCH_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case PITCH_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
