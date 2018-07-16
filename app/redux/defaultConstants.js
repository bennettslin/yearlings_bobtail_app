import StorageHelper from './storageHelper'

import {
    getSceneIndexForVerseIndex
} from '../helpers/dataHelper'

import {

    DEVICE_INDEX,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    STAGE_COORDINATES,
    STAGE_COORDINATES_DEFAULT,

    RENDERABLE_SONG_INDEX,
    RENDERABLE_ANNOTATION_INDEX,
    RENDERABLE_VERSE_INDEX,
    RENDERABLE_SCENE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,

    IS_SLIDER_MOVING,
    IS_SLIDER_TOUCHED,
    SLIDER_LEFT,
    SLIDER_RATIO,
    SLIDER_WIDTH,
    SLIDER_VERSE_INDEX

} from '../constants/state'

const { getFromStorage } = StorageHelper,
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX)

export const DEVICE_DEFAULTS = {
    [DEVICE_INDEX]: 0,
    [WINDOW_HEIGHT]: 0,
    [WINDOW_WIDTH]: 0,
    [STAGE_COORDINATES]: STAGE_COORDINATES_DEFAULT
}

export const RENDERABLE_DEFAULTS = {
    [RENDERABLE_SONG_INDEX]: storedSongIndex,
    [RENDERABLE_ANNOTATION_INDEX]: storedAnnotationIndex,
    [RENDERABLE_VERSE_INDEX]: storedVerseIndex,
    [RENDERABLE_SCENE_INDEX]: getSceneIndexForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    )
}

export const SLIDER_DEFAULTS = {
    [IS_SLIDER_MOVING]: false,
    [IS_SLIDER_TOUCHED]: false,
    [SLIDER_LEFT]: 0,
    [SLIDER_RATIO]: 0,
    [SLIDER_WIDTH]: 0,
    [SLIDER_VERSE_INDEX]: -1
}
