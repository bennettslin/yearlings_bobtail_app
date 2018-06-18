// Reducers for accessed state.
import { ACCESSED_ANNOTATION_INDEX,
         ACCESSED_ANNOTATION_ANCHOR_INDEX,
         ACCESSED_DOT_INDEX,
         ACCESSED_NAV_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_SONG_INDEX,
         SELECTED_VERSE_INDEX } from '../../constants/state'

import StorageHelper from '../storageHelper'

/* eslint-disable */
const { getFromStorage } = StorageHelper,
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX)

export const AccessedAnnotationIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case ACCESSED_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AccessedAnnotationAnchorIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case ACCESSED_ANNOTATION_ANCHOR_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AccessedDotIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case ACCESSED_DOT_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AccessedNavSongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case ACCESSED_NAV_SONG_INDEX:
            return action.payload
        default:
            return state
    }
}
