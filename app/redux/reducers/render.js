// Reducers for state of this user session.
import {
    IS_SONG_CHANGE_RENDERABLE,
    IS_WINDOW_RESIZE_RENDERABLE,
    RENDER_READY_SONG_INDEX,
    RENDER_READY_ANNOTATION_INDEX,
    RENDER_READY_VERSE_INDEX,
    CAN_THEATRE_RENDER,
    CAN_MAIN_RENDER,
    CAN_SLIDER_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    CAN_SCENE_RENDER,
    RENDERABLE_CUBES_Y_INDEX,
    RENDERABLE_PIXELS_Y_INDEX,
    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX
} from '../../constants/state'

import StorageHelper from '../storageHelper'

const { getFromStorage } = StorageHelper,
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX)

export const isWindowResizeRenderableReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case IS_WINDOW_RESIZE_RENDERABLE:
            return action.payload
        default:
            return state
    }
}

export const isSongChangeRenderableReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case IS_SONG_CHANGE_RENDERABLE:
            return action.payload
        default:
            return state
    }
}

export const RenderableSongIndexReducer = (
    state = storedSongIndex,
    action
) => {
    switch (action.type) {
        case RENDER_READY_SONG_INDEX:
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
        case RENDER_READY_ANNOTATION_INDEX:
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
        case RENDER_READY_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const CanTheatreRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_THEATRE_RENDER:
            return action.payload
        default:
            return state
    }
}
export const CanMainRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_MAIN_RENDER:
            return action.payload
        default:
            return state
    }
}
export const CanSliderRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_SLIDER_RENDER:
            return action.payload
        default:
            return state
    }
}
export const CanLyricRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_LYRIC_RENDER:
            return action.payload
        default:
            return state
    }
}
export const CanCarouselRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_CAROUSEL_RENDER:
            return action.payload
        default:
            return state
    }
}
export const CanSceneRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_SCENE_RENDER:
            return action.payload
        default:
            return state
    }
}
export const RenderableCubesYIndexReducer = (
    state = 0,
    action
) => {
    switch (action.type) {
        case RENDERABLE_CUBES_Y_INDEX:
            return action.payload
        default:
            return state
    }
}
export const RenderablePixelsYIndexReducer = (
    state = 0,
    action
) => {
    switch (action.type) {
        case RENDERABLE_PIXELS_Y_INDEX:
            return action.payload
        default:
            return state
    }
}
