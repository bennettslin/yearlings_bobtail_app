// Actions for player state.
import { CAN_PLAY_THROUGHS } from '../../constants/state'

export const setCanPlayThroughs = (canPlayThroughs = 0) => {
    // This is a bit number.
    return { type: CAN_PLAY_THROUGHS,
             payload: canPlayThroughs }
}
