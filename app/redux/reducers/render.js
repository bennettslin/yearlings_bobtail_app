// Reducers for can render state.
import { RENDER_STORE } from 'constants/state'
import { RENDER_DEFAULTS } from '../defaultConstants'

export const RenderStoreReducer = (
    state = RENDER_DEFAULTS,
    action
) => {
    switch (action.type) {
        case RENDER_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
