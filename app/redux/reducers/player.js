// Reducers for player state.
import { CAN_PLAY_THROUGHS } from '../../constants/state'

export const canPlayThroughsReducer = (state, action) => {
    switch (action.type) {
        case CAN_PLAY_THROUGHS: {
            const { playerSongIndex,
                    canPlayThrough } = action.payload,
                // Copy state object.
                newState = Object.assign({}, state)
            newState[playerSongIndex] = canPlayThrough
            return newState
        }
        default:
            return state
    }
}
