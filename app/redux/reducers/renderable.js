// Reducers for renderable state.
import {
    IS_SCENE_CHANGE_RENDERABLE,
    IS_SONG_CHANGE_RENDERABLE,
    IS_WINDOW_RESIZE_RENDERABLE
} from 'constants/state'

export const IsSceneChangeRenderableReducer = (
    state = false,
    action
) => {
    switch (action.type) {
        case IS_SCENE_CHANGE_RENDERABLE:
            return action.payload
        default:
            return state
    }
}
export const IsSongChangeRenderableReducer = (
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
export const IsWindowResizeRenderableReducer = (
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
