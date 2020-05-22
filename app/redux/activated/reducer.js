// Reducers for activated state.
import { ACTIVATED_STORE } from '../../constants/store'
import { ACTIVATED_DEFAULTS } from './default'

export default (
    state = ACTIVATED_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ACTIVATED_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
