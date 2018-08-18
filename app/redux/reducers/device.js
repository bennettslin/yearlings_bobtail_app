// Reducers for window size.
import { DEVICE_STORE } from 'constants/state'
import { DEVICE_DEFAULTS } from '../defaultConstants'

export const DeviceStoreReducer = (
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
