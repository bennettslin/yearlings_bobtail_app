// Reducers for window size.
import { TOGGLE_STORE } from '../../constants/store'
import { TOGGLE_DEFAULTS } from './default'

export default (
    state = TOGGLE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case TOGGLE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
