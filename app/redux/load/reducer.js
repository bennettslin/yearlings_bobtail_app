// Reducers for audio values.
import { LOAD_STORE } from '../../constants/store/keys'
import { LOAD_DEFAULTS } from '../defaultStates'

export default (
    state = LOAD_DEFAULTS,
    action
) => {
    switch (action.type) {
        case LOAD_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
