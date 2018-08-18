// Actions for renderable state.
import { is } from './actionsHelper'

import { RENDERABLE_STORE } from 'constants/state'
import { RENDERABLE_DEFAULTS } from '../defaultConstants'

export const updateRenderableStore = ({
    renderableSongIndex,
    renderableAnnotationIndex,
    renderableVerseIndex,
    renderableSceneIndex

} = RENDERABLE_DEFAULTS) => ({

    type: RENDERABLE_STORE,
    payload: {
        ...is(renderableSongIndex) && { renderableSongIndex },
        ...is(renderableAnnotationIndex) && { renderableAnnotationIndex },
        ...is(renderableVerseIndex) && { renderableVerseIndex },
        ...is(renderableSceneIndex) && { renderableSceneIndex }
    }
})
