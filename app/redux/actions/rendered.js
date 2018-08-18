// Actions for rendered state.
import { is } from './actionsHelper'

import { RENDERED_STORE } from 'constants/state'
import { RENDERED_DEFAULTS } from '../defaultConstants'

export const updateRenderedStore = ({
    renderedSongIndex,
    renderedAnnotationIndex,
    renderedVerseIndex,
    renderedSceneIndex

} = RENDERED_DEFAULTS) => ({

    type: RENDERED_STORE,
    payload: {
        ...is(renderedSongIndex) && { renderedSongIndex },
        ...is(renderedAnnotationIndex) && { renderedAnnotationIndex },
        ...is(renderedVerseIndex) && { renderedVerseIndex },
        ...is(renderedSceneIndex) && { renderedSceneIndex }
    }
})
