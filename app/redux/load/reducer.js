// Reducers for audio values.
import { LOAD_STORE } from '../../constants/store'
import { LOAD_DEFAULTS } from './default'

export default (
    state = LOAD_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case LOAD_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
