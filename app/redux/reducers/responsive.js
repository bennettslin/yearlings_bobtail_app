// Reducers for state based on window size.
import { IS_CAROUSEL_EXPANDABLE,
         IS_HEIGHTLESS_LYRIC_COLUMN,
         IS_HIDDEN_NAV,
         IS_SCORES_TIPS_IN_MAIN } from '../../constants/state'

export const IsCarouselExpandableReducer = (state = false, action) => {
    switch (action.type) {
        case IS_CAROUSEL_EXPANDABLE:
            return action.payload
        default:
            return state
    }
}

export const IsHeightlessLyricColumnReducer = (state = false, action) => {
    switch (action.type) {
        case IS_HEIGHTLESS_LYRIC_COLUMN:
            return action.payload
        default:
            return state
    }
}

export const IsHiddenNavReducer = (state = false, action) => {
    switch (action.type) {
        case IS_HIDDEN_NAV:
            return action.payload
        default:
            return state
    }
}

export const IsScoresTipsInMainReducer = (state = false, action) => {
    switch (action.type) {
        case IS_SCORES_TIPS_IN_MAIN:
            return action.payload
        default:
            return state
    }
}
