// Reducers for can enter state.
import { TRANSITION_STORE } from '../storeKeys'
import { TRANSITION_DEFAULTS } from '../defaultStates'

export default (
    state = TRANSITION_DEFAULTS,
    action
) => {
    switch (action.type) {
        case TRANSITION_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
