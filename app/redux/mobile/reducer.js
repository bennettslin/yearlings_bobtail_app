// Reducers for actual mobile devices.
import { MOBILE_STORE } from '../storeKeys'
import { MOBILE_DEFAULTS } from '../defaultStates'

export default (
    state = MOBILE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case MOBILE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
