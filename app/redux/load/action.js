// Actions for player and score state.
import {
    APP_MOUNTED,
    IS_SCORE_LOADED
} from 'constants/state'

export const setAppMounted = (appMounted = false) => ({
    type: APP_MOUNTED,
    payload: appMounted
})

export const setIsScoreLoaded = (isScoreLoaded = false) => {
    return {
        type: IS_SCORE_LOADED,
        payload: isScoreLoaded
    }
}
