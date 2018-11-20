// Actions for player and score state.
import {
    APP_MOUNTED,
    CAN_PLAY_THROUGHS,
    IS_SCORE_LOADED
} from 'constants/state'

export const setAppMounted = (appMounted = false) => ({
    type: APP_MOUNTED,
    payload: appMounted
})

export const setCanPlayThroughs = (canPlayThroughs = 0) => {
    // This is a bit number.
    return { type: CAN_PLAY_THROUGHS,
        payload: canPlayThroughs }
}

export const setIsScoreLoaded = (isScoreLoaded = false) => {
    return { type: IS_SCORE_LOADED,
        payload: isScoreLoaded }
}
