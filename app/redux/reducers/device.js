// Reducers for window size.
import { DEVICE_INDEX,
         WINDOW_HEIGHT,
         WINDOW_WIDTH,
         STAGE_COORDINATES,
         STAGE_COORDINATES_DEFAULT } from '../../constants/state'

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

export const StageCoordinatesReducer = (state = STAGE_COORDINATES_DEFAULT, action) => {
    switch (action.type) {
        case STAGE_COORDINATES:
            return action.payload
        default:
            return state
    }
}
