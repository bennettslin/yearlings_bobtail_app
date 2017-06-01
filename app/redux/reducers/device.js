// Reducers for window size.
import { DEVICE_INDEX,
         WINDOW_HEIGHT,
         WINDOW_WIDTH } from '../../constants/state'

export const DeviceIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case DEVICE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const WindowHeightReducer = (state = 0, action) => {
    switch (action.type) {
        case WINDOW_HEIGHT:
            return action.payload
        default:
            return state
    }
}

export const WindowWidthReducer = (state = 0, action) => {
    switch (action.type) {
        case WINDOW_WIDTH:
            return action.payload
        default:
            return state
    }
}
