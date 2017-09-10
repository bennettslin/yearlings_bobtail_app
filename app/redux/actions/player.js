// Actions for player and score state.
import { CAN_PLAY_THROUGHS,
         IS_SCORE_LOADED } from '../../constants/state'

export const setCanPlayThroughs = (canPlayThroughs = 0) => {
    // This is a bit number.
    return { type: CAN_PLAY_THROUGHS,
             payload: canPlayThroughs }
}

export const setIsScoreLoaded = (isScoreLoaded = false) => {
    return { type: IS_SCORE_LOADED,
             payload: isScoreLoaded }
}
