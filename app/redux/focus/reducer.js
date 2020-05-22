// Reducers for focus values.
import { FOCUS_STORE } from '../../constants/store'
import { FOCUS_DEFAULTS } from './default'

export default (
    state = FOCUS_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case FOCUS_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
