// Reducers for window resizing.
import { CHANGE_STORE } from '../storeKeys'
import { CHANGE_DEFAULTS } from '../defaultStates'

export default (
    state = CHANGE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case CHANGE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
