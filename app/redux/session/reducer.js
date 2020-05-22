// Reducers for session values.
import { SESSION_STORE } from '../../constants/store'
import { SESSION_DEFAULTS } from './default'

export default (
    state = SESSION_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SESSION_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
