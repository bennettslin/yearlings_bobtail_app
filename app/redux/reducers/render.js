// Reducers for state of this user session.
import {
    IS_SONG_CHANGE_RENDERABLE,
    IS_WINDOW_RESIZE_RENDERABLE,
    CAN_THEATRE_RENDER,
    CAN_MAIN_RENDER,
    CAN_VERSE_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    CAN_SCENE_RENDER
} from 'constants/state'

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
export const CanVerseRenderReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case CAN_VERSE_RENDER:
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
