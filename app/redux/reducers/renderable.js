import {
    RENDERABLE_SONG_INDEX,
    RENDERABLE_ANNOTATION_INDEX,
    RENDERABLE_VERSE_INDEX,
    RENDERABLE_SCENE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX
} from '../../constants/state'

import StorageHelper from '../storageHelper'

import {
    getSceneIndexForVerseIndex
} from '../../helpers/dataHelper'

const { getFromStorage } = StorageHelper,
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX)

export const RenderableSongIndexReducer = (
    state = storedSongIndex,
    action
) => {
    switch (action.type) {
        case RENDERABLE_SONG_INDEX:
            return action.payload
        default:
            return state
    }
}

export const RenderableAnnotationIndexReducer = (
    state = storedAnnotationIndex,
    action
) => {
    switch (action.type) {
        case RENDERABLE_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const RenderableVerseIndexReducer = (
    state = storedVerseIndex,
    action
) => {
    switch (action.type) {
        case RENDERABLE_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const RenderableSceneIndexReducer = (
    state = getSceneIndexForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    ),
    action
) => {
    switch (action.type) {
        case RENDERABLE_SCENE_INDEX:
            return action.payload
        default:
            return state
    }
}
