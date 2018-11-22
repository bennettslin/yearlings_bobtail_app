// Reducers for state based on window size.
import { RESPONSIVE_STORE } from '../storeKeys'
import { RESPONSIVE_DEFAULTS } from '../defaultStates'

export default (
    state = RESPONSIVE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case RESPONSIVE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
