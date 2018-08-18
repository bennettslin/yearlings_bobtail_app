// Actions for renderable state.
import { is } from './actionsHelper'

import { RENDERED_STORE } from 'constants/state'
import { RENDERED_DEFAULTS } from '../defaultConstants'

export const updateRenderedStore = ({
    renderableSongIndex,
    renderableAnnotationIndex,
    renderableVerseIndex,
    renderableSceneIndex

} = RENDERED_DEFAULTS) => ({

    type: RENDERED_STORE,
    payload: {
        ...is(renderableSongIndex) && { renderableSongIndex },
        ...is(renderableAnnotationIndex) && { renderableAnnotationIndex },
        ...is(renderableVerseIndex) && { renderableVerseIndex },
        ...is(renderableSceneIndex) && { renderableSceneIndex }
    }
})
