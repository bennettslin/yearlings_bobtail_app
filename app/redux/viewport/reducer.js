// Reducers for viewport size.
import { VIEWPORT_STORE } from '../storeKeys'
import { VIEWPORT_DEFAULTS } from '../defaultStates'

export default (
    state = VIEWPORT_DEFAULTS,
    action
) => {
    switch (action.type) {
        case VIEWPORT_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
