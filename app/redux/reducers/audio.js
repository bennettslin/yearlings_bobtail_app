// Reducers for audio state.
import { IS_PLAYING,
         UPDATED_TIME_PLAYED } from '../../constants/state'

export const IsPlayingReducer = (state = false, action) => {
    switch (action.type) {
        case IS_PLAYING:
            return action.payload
        default:
            return state
    }
}

export const UpdatedTimePlayedReducer = (state = null, action) => {
    switch (action.type) {
        case UPDATED_TIME_PLAYED:
            return action.payload
        default:
            return state
    }
}
