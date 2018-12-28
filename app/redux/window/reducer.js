// Reducers for window resizing.
import { WINDOW_STORE } from '../storeKeys'
import { WINDOW_DEFAULTS } from '../defaultStates'

export default (
    state = WINDOW_DEFAULTS,
    action
) => {
    switch (action.type) {
        case WINDOW_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
