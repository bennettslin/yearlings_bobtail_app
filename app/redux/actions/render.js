// Actions for can render state.
import { is } from './actionsHelper'

import { RENDER_STORE } from 'constants/state'
import { RENDER_DEFAULTS } from '../defaultConstants'

export const updateRenderStore = ({
    canTheatreRender,
    canVerseRender,
    canMainRender,
    canLyricRender,
    canCarouselRender,
    canSceneRender

} = RENDER_DEFAULTS) => ({

    type: RENDER_STORE,
    payload: {
        ...is(canTheatreRender) && { canTheatreRender },
        ...is(canVerseRender) && { canVerseRender },
        ...is(canMainRender) && { canMainRender },
        ...is(canLyricRender) && { canLyricRender },
        ...is(canCarouselRender) && { canCarouselRender },
        ...is(canSceneRender) && { canSceneRender }
    }
})
