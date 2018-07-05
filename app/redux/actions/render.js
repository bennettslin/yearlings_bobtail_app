// Actions for state of this user session.

import { setSceneRenderState } from '../renderHelper'

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
    CAN_CUBES_RENDER,
    CAN_PIXELS_RENDER
} from '../../constants/state'

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

export const setRenderableSongIndex = (
    renderableSongIndex = -1
) => ({
    type: RENDER_READY_SONG_INDEX,
    payload: renderableSongIndex
})

export const setRenderableAnnotationIndex = (
    renderableAnnotationIndex = 0
) => ({
    type: RENDER_READY_ANNOTATION_INDEX,
    payload: renderableAnnotationIndex
})

export const setRenderableVerseIndex = (
    renderableVerseIndex = 0
) => ({
    type: RENDER_READY_VERSE_INDEX,
    payload: renderableVerseIndex
})

export const setCanRenderTheatre = (
    canRenderTheatre = false
) => ({
    type: CAN_THEATRE_RENDER,
    payload: canRenderTheatre
})

export const setCanRenderMain = (
    canRenderMain = false
) => ({
    type: CAN_MAIN_RENDER,
    payload: canRenderMain
})

export const setCanRenderSlider = (
    canRenderSlider = false
) => ({
    type: CAN_SLIDER_RENDER,
    payload: canRenderSlider
})

export const setCanRenderLyric = (
    canRenderLyric = false
) => ({
    type: CAN_LYRIC_RENDER,
    payload: canRenderLyric
})

export const setCanRenderCarousel = (
    canRenderCarousel = false
) => ({
    type: CAN_CAROUSEL_RENDER,
    payload: canRenderCarousel
})

export const setCanRenderScene = (
    canRenderScene = false
) => ({
    type: CAN_SCENE_RENDER,
    payload: canRenderScene
})

export const setCanRenderCubes = (payload) => ({
    type: CAN_CUBES_RENDER,
    payload: setSceneRenderState(payload)
})

export const setCanRenderPixels = (payload) => ({
    type: CAN_PIXELS_RENDER,
    payload: setSceneRenderState(payload)
})
