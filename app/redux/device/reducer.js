// Reducers for window size.
import { DEVICE_STORE } from '../storeKeys'
import { DEVICE_DEFAULTS } from '../defaultStates'

export default (
    state = DEVICE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case DEVICE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
