// Reducers for window size.
import { TRANSIENT_STORE } from '../../constants/store'
import { TRANSIENT_DEFAULTS } from './default'

export default (
    state = TRANSIENT_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case TRANSIENT_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
