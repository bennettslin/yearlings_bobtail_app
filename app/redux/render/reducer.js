// Reducers for can render state.
import { RENDER_STORE } from '../storeKeys'
import { RENDER_DEFAULTS } from '../defaultStates'

export default (
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
