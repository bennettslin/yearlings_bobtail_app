// Reducers for player state.
import {
    APP_MOUNTED,
    CAN_PLAY_THROUGHS,
    IS_SCORE_LOADED
} from 'constants/state'

export const AppMountedReducer = (state = false, action) => {
    switch (action.type) {
        case APP_MOUNTED:
            return action.payload
        default:
            return state
    }
}


export const CanPlayThroughsReducer = (state = 0, action) => {
    // This is a bit number.
    switch (action.type) {
        case CAN_PLAY_THROUGHS:
            return action.payload
        default:
            return state
    }
}

export const IsScoreLoadedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_SCORE_LOADED:
            return action.payload
        default:
            return state
    }
}
