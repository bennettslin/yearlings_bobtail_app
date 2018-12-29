// Reducers for focus values.
import { FOCUS_STORE } from '../storeKeys'
import { FOCUS_DEFAULTS } from '../defaultStates'

export default (
    state = FOCUS_DEFAULTS,
    action
) => {
    switch (action.type) {
        case FOCUS_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
