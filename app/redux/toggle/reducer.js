// Reducers for window size.
import { TOGGLE_STORE } from '../../constants/store'
import { TOGGLE_DEFAULTS } from './default'

export default (
    state = TOGGLE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case TOGGLE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
