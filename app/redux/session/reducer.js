// Reducers for session values.
import { SESSION_STORE } from '../../constants/store'
import { SESSION_DEFAULTS } from './default'

export default (
    state = SESSION_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SESSION_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
