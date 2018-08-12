// Reducers for audio state.
import { IS_PLAYING } from 'constants/state'

export const IsPlayingReducer = (state = false, action) => {
    switch (action.type) {
        case IS_PLAYING:
            return action.payload
        default:
            return state
    }
}
