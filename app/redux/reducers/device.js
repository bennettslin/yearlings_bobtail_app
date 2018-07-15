// Reducers for window size.

import {
    DEVICE_STORE,
    DEVICE_INDEX,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    STAGE_COORDINATES,
    STAGE_COORDINATES_DEFAULT
} from '../../constants/state'

export const DeviceStoreReducer = (

    state = {
        [DEVICE_INDEX]: 0,
        [WINDOW_HEIGHT]: 0,
        [WINDOW_WIDTH]: 0,
        [STAGE_COORDINATES]: STAGE_COORDINATES_DEFAULT
    },
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
