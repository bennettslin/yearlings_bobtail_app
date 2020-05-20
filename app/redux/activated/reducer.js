// Reducers for activated state.
import { ACTIVATED_STORE } from '../../constants/store/keys'
import { ACTIVATED_DEFAULTS } from '../defaultStates'

export default (
    state = ACTIVATED_DEFAULTS,
    action
) => {
    switch (action.type) {
        case ACTIVATED_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
