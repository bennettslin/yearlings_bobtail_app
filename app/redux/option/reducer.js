// Reducers for options state.
import { OPTION_STORE } from '../../constants/store/keys'
import { OPTION_DEFAULTS } from '../defaultStates'

export default (
    state = OPTION_DEFAULTS,
    action
) => {
    switch (action.type) {
        case OPTION_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
