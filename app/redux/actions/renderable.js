// Actions for renderable state.
import { is } from './actionsHelper'

import { RENDERABLE_STORE } from 'constants/state'
import { RENDERABLE_DEFAULTS } from '../defaultConstants'

export const updateRenderableStore = ({
    isSceneChangeRenderable,
    isSongChangeRenderable,
    isWindowResizeRenderable

} = RENDERABLE_DEFAULTS) => ({

    type: RENDERABLE_STORE,
    payload: {
        ...is(isSceneChangeRenderable) && { isSceneChangeRenderable },
        ...is(isSongChangeRenderable) && { isSongChangeRenderable },
        ...is(isWindowResizeRenderable) && { isWindowResizeRenderable }
    }
})
