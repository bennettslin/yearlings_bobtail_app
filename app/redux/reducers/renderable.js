// Reducers for renderable state.

import { RENDERABLE_STORE } from 'constants/state'
import { RENDERABLE_DEFAULTS } from '../defaultConstants'

export const RenderableStoreReducer = (
    state = RENDERABLE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case RENDERABLE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
