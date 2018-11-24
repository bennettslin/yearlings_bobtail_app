// Reducers for accessed values.
import { EVENT_STORE } from '../storeKeys'
import { EVENT_DEFAULTS } from '../defaultStates'

export default (
    state = EVENT_DEFAULTS,
    action
) => {
    switch (action.type) {
        case EVENT_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
