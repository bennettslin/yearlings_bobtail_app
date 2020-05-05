// Reducers for banner state.
import { BANNER_STORE } from '../storeKeys'
import { BANNER_DEFAULTS } from '../defaultStates'

export default (
    state = BANNER_DEFAULTS,
    action
) => {
    switch (action.type) {
        case BANNER_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
