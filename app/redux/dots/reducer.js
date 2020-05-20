// Reducers for selected dots.
import { DOTS_STORE } from '../../constants/store/keys'
import { DOTS_DEFAULTS } from '../defaultStates'

export default (
    state = DOTS_DEFAULTS,
    action
) => {
    switch (action.type) {
        case DOTS_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
