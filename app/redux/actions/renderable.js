// Actions for renderable state.
import {
    IS_SCENE_CHANGE_RENDERABLE,
    IS_SONG_CHANGE_RENDERABLE,
    IS_WINDOW_RESIZE_RENDERABLE
} from 'constants/state'

export const setIsSceneChangeRenderable = (
    isSceneChangeRenderable = false
) => ({
    type: IS_SCENE_CHANGE_RENDERABLE,
    payload: isSceneChangeRenderable
})

export const setIsSongChangeRenderable = (
    isSongChangeRenderable = false
) => ({
    type: IS_SONG_CHANGE_RENDERABLE,
    payload: isSongChangeRenderable
})

export const setIsWindowResizeRenderable = (
    isWindowResizeRenderable = false
) => ({
    type: IS_WINDOW_RESIZE_RENDERABLE,
    payload: isWindowResizeRenderable
})
