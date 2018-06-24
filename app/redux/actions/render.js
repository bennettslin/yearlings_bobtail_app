// Actions for state of this user session.
import {
    IS_RENDERABLE,
    RENDER_READY_SONG_INDEX,
    RENDER_READY_ANNOTATION_INDEX,
    RENDER_READY_VERSE_INDEX,
    CAN_THEATRE_RENDER,
    CAN_MAIN_RENDER,
    CAN_SLIDER_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    CAN_SCENE_RENDER
} from '../../constants/state'

export const setIsRenderable = (
    isRenderable = false
) => ({
    type: IS_RENDERABLE,
    payload: isRenderable
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
    canRenderTheatre = 0
) => ({
    type: CAN_THEATRE_RENDER,
    payload: canRenderTheatre
})

export const setCanRenderMain = (
    canRenderMain = 0
) => ({
    type: CAN_MAIN_RENDER,
    payload: canRenderMain
})

export const setCanRenderSlider = (
    canRenderSlider = 0
) => ({
    type: CAN_SLIDER_RENDER,
    payload: canRenderSlider
})

export const setCanRenderLyric = (
    canRenderLyric = 0
) => ({
    type: CAN_LYRIC_RENDER,
    payload: canRenderLyric
})

export const setCanRenderCarousel = (
    canRenderCarousel = 0
) => ({
    type: CAN_CAROUSEL_RENDER,
    payload: canRenderCarousel
})

export const setCanRenderScene = (
    canRenderScene = 0
) => ({
    type: CAN_SCENE_RENDER,
    payload: canRenderScene
})
