// Reducers for rendered state.
import { RENDERED_STORE } from 'constants/state'
import { RENDERED_DEFAULTS } from '../defaultConstants'

export const RenderedStoreReducer = (
    state = RENDERED_DEFAULTS,
    action
) => {
    switch (action.type) {
        case RENDERED_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
