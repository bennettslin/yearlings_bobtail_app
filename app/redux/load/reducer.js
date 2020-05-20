// Reducers for audio values.
import { LOAD_STORE } from '../../constants/store'
import { LOAD_DEFAULTS } from './default'

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
