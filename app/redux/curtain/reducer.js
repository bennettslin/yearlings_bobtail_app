// Reducers for curtain transitions.
import { CURTAIN_STORE } from '../storeKeys'
import { CURTAIN_DEFAULTS } from '../defaultStates'

export default (
    state = CURTAIN_DEFAULTS,
    action
) => {
    switch (action.type) {
        case CURTAIN_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
