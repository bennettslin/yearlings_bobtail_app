// Reducers for player state.
import { CAN_PLAY_THROUGHS } from '../../constants/state'

export const CanPlayThroughsReducer = (state = 0, action) => {
    // This is a bit number.
    switch (action.type) {
        case CAN_PLAY_THROUGHS:
            return action.payload
        default:
            return state
    }
}
