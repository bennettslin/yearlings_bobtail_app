// Reducers for slider state.
import { SLIDER_STORE } from '../../constants/store'
import { SLIDER_DEFAULTS } from './default'

export default (
    state = SLIDER_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case SLIDER_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
