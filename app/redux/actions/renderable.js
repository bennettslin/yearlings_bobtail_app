import {
    RENDERABLE_SONG_INDEX,
    RENDERABLE_ANNOTATION_INDEX,
    RENDERABLE_VERSE_INDEX,
    RENDERABLE_SCENE_INDEX
} from '../../constants/state'

export const setRenderableSongIndex = (
    renderableSongIndex = -1
) => {
    // console.error(RENDERABLE_SONG_INDEX, renderableSongIndex)
    return {
        type: RENDERABLE_SONG_INDEX,
        payload: renderableSongIndex
    }
}

export const setRenderableAnnotationIndex = (
    renderableAnnotationIndex = 0
) => {
    // console.error(RENDERABLE_ANNOTATION_INDEX, renderableAnnotationIndex)
    return {
        type: RENDERABLE_ANNOTATION_INDEX,
        payload: renderableAnnotationIndex
    }
}

export const setRenderableVerseIndex = (
    renderableVerseIndex = -1
) => {
    // console.error(RENDERABLE_VERSE_INDEX, renderableVerseIndex)
    return {
        type: RENDERABLE_VERSE_INDEX,
        payload: renderableVerseIndex
    }
}

export const setRenderableSceneIndex = (
    renderableSceneIndex = -1
) => {
    // console.error(RENDERABLE_SCENE_INDEX, renderableSceneIndex)
    return {
        type: RENDERABLE_SCENE_INDEX,
        payload: renderableSceneIndex
    }
}
