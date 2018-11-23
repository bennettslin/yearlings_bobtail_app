// Reducers for player state.
import {
    APP_MOUNTED,
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

export const IsScoreLoadedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_SCORE_LOADED:
            return action.payload
        default:
            return state
    }
}
