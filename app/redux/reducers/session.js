// Reducers for state of this user session.
import { IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW } from '../../constants/state'

export const IsLyricExpandedReducer = (state = 0, action) => {
    switch (action.type) {
        case IS_LYRIC_EXPANDED:
            return action.payload
        default:
            return state
    }
}

export const IsVerseBarAboveReducer = (state = 0, action) => {
    switch (action.type) {
        case IS_VERSE_BAR_ABOVE:
            return action.payload
        default:
            return state
    }
}

export const IsVerseBarBelowReducer = (state = 0, action) => {
    switch (action.type) {
        case IS_VERSE_BAR_BELOW:
            return action.payload
        default:
            return state
    }
}
