// Actions for state of this user session.
import {
    IS_SONG_CHANGE_RENDERABLE,
    IS_WINDOW_RESIZE_RENDERABLE,
    CAN_THEATRE_RENDER,
    CAN_VERSE_RENDER,
    CAN_MAIN_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    CAN_PRESENCES_RENDER
} from 'constants/state'

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

export const setCanRenderTheatre = (
    canRenderTheatre = false
) => ({
    type: CAN_THEATRE_RENDER,
    payload: canRenderTheatre
})

export const setCanRenderVerse = (
    canRenderVerse = false
) => ({
    type: CAN_VERSE_RENDER,
    payload: canRenderVerse
})

export const setCanRenderMain = (
    canRenderMain = false
) => ({
    type: CAN_MAIN_RENDER,
    payload: canRenderMain
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

export const setCanRenderPresences = (
    canRenderScene = false
) => ({
    type: CAN_PRESENCES_RENDER,
    payload: canRenderScene
})
