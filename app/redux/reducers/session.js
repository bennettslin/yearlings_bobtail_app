// Reducers for state of this user session.
import {
    CAROUSEL_ANNOTATION_INDEX,
    INTERACTIVATED_VERSE_INDEX,
    SHOWN_BOOK_COLUMN_INDEX,
    SELECTED_SONG_INDEX
} from 'constants/state'

import {
    getBookColumnIndex
} from 'helpers/dataHelper'

import { getFromStorage } from '../storageHelper'

const storedSongIndex = getFromStorage(SELECTED_SONG_INDEX)

export const CarouselAnnotationIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case CAROUSEL_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const InteractivatedVerseIndexReducer = (state = -1, action) => {
    switch (action.type) {
        case INTERACTIVATED_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const ShownBookColumnIndexReducer = (
    state = getBookColumnIndex(storedSongIndex),
    action
) => {
    switch (action.type) {
        case SHOWN_BOOK_COLUMN_INDEX:
            return action.payload
        default:
            return state
    }
}
