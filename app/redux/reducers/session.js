// Reducers for state of this user session.
import { APP_MOUNTED,
         IS_RENDERABLE,
         RENDER_READY_SONG_INDEX,
         RENDER_READY_ANNOTATION_INDEX,
         RENDER_READY_VERSE_INDEX,
         CAROUSEL_ANNOTATION_INDEX,
         INTERACTIVATED_VERSE_INDEX,
         CURRENT_SCENE_INDEX,
         IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW,
         IS_MANUAL_SCROLL,
         SELECTED_VERSE_ELEMENT,
         SHOWN_BOOK_COLUMN_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_SONG_INDEX,
         SELECTED_VERSE_INDEX } from '../../constants/state'

import {
    getBookColumnIndex,
    getSceneIndexForVerseIndex
} from '../../helpers/dataHelper'

import StorageHelper from '../storageHelper'

const { getFromStorage } = StorageHelper,
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX)

export const AppMountedReducer = (state = false, action) => {
    switch (action.type) {
        case APP_MOUNTED:
            return action.payload
        default:
            return state
    }
}

export const IsRenderableReducer = (state = false, action) => {
    switch (action.type) {
        case IS_RENDERABLE:
            return action.payload
        default:
            return state
    }
}

export const RenderReadySongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case RENDER_READY_SONG_INDEX:
            return action.payload
        default:
            return state
    }
}

export const RenderReadyAnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case RENDER_READY_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const RenderReadyVerseIndexReducer = (state = storedVerseIndex, action) => {
    switch (action.type) {
        case RENDER_READY_VERSE_INDEX:
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

export const InteractivatedVerseIndexReducer = (state = -1, action) => {
    switch (action.type) {
        case INTERACTIVATED_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const CurrentSceneIndexReducer = (
    state = getSceneIndexForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    ),
    action
) => {
    switch (action.type) {
        case CURRENT_SCENE_INDEX:
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

export const IsManualScrollReducer = (state = false, action) => {
    switch (action.type) {
        case IS_MANUAL_SCROLL:
            return action.payload
        default:
            return state
    }
}

export const SelectedVerseElementReducer = (state = null, action) => {
    switch (action.type) {
        case SELECTED_VERSE_ELEMENT:
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
