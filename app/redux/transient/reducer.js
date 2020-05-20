// Reducers for window size.
import { TRANSIENT_STORE } from '../../constants/store'
import { TRANSIENT_DEFAULTS } from './default'

export default (
    state = TRANSIENT_DEFAULTS,
    action
) => {
    switch (action.type) {
        case TRANSIENT_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
