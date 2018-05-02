// Reducers for state based on window size.
import { IS_HEIGHTLESS_LYRIC_COLUMN,
         IS_HIDDEN_NAV,
         IS_MOBILE_WIKI,
         IS_SCORES_TIPS_IN_MAIN,
         IS_TWO_ROW_MENU,
         SHOW_ONE_OF_TWO_LYRIC_COLUMNS,
         SHOW_SHRUNK_NAV_ICON,
         SHOW_SINGLE_BOOK_COLUMN } from '../../constants/state'

export const IsHeightlessLyricColumnReducer = (state = false, action) => {
    switch (action.type) {
        case IS_HEIGHTLESS_LYRIC_COLUMN:
            return action.payload
        default:
            return state
    }
}

export const IsHiddenCarouselNavReducer = (state = false, action) => {
    switch (action.type) {
        case IS_HIDDEN_NAV:
            return action.payload
        default:
            return state
    }
}

export const IsMobileWikiReducer = (state = false, action) => {
    switch (action.type) {
        case IS_MOBILE_WIKI:
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

export const isTwoRowMenuReducer = (state = false, action) => {
    switch (action.type) {
        case IS_TWO_ROW_MENU:
            return action.payload
        default:
            return state
    }
}

export const ShowOneOfTwoLyricColumnsReducer = (state = false, action) => {
    switch (action.type) {
        case SHOW_ONE_OF_TWO_LYRIC_COLUMNS:
            return action.payload
        default:
            return state
    }
}

export const ShowShrunkNavIconReducer = (state = false, action) => {
    switch (action.type) {
        case SHOW_SHRUNK_NAV_ICON:
        return action.payload
        default:
        return state
    }
}

export const ShowSingleBookColumnReducer = (state = false, action) => {
    switch (action.type) {
        case SHOW_SINGLE_BOOK_COLUMN:
            return action.payload
        default:
            return state
    }
}
