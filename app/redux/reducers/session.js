// Reducers for state of this user session.
import { APP_MOUNTED,
         CAROUSEL_ANNOTATION_INDEX,
         INTERACTIVATED_VERSE_INDEX,
         IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW,
         SHOWN_BOOK_COLUMN_INDEX } from '../../constants/state'

export const AppMountedReducer = (state = 0, action) => {
    switch (action.type) {
        case APP_MOUNTED:
            return action.payload
        default:
            return state
    }
}

export const CarouselAnnotationIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case CAROUSEL_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const InteractivatedVerseIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case INTERACTIVATED_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const IsLyricExpandedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_LYRIC_EXPANDED:
            return action.payload
        default:
            return state
    }
}

export const IsVerseBarAboveReducer = (state = false, action) => {
    switch (action.type) {
        case IS_VERSE_BAR_ABOVE:
            return action.payload
        default:
            return state
    }
}

export const IsVerseBarBelowReducer = (state = false, action) => {
    switch (action.type) {
        case IS_VERSE_BAR_BELOW:
            return action.payload
        default:
            return state
    }
}

export const ShownBookColumnIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case SHOWN_BOOK_COLUMN_INDEX:
            return action.payload
        default:
            return state
    }
}
