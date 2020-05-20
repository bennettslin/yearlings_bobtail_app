// Reducers for slider state.
import { SLIDER_STORE } from '../../constants/store/keys'
import { SLIDER_DEFAULTS } from '../defaultStates'

export default (
    state = SLIDER_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SLIDER_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
