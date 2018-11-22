// Reducers for renderable state.
import { RENDERABLE_STORE } from '../storeKeys'
import { RENDERABLE_DEFAULTS } from '../defaultStates'

export default (
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
