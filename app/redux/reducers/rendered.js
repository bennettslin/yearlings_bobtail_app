// Reducers for rendered state.
import { RENDERED_STORE } from '../storeKeys'
import { RENDERED_DEFAULTS } from '../defaultStates'

export default (
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
