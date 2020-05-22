// Reducers for selected dots.
import { DOTS_STORE } from '../../constants/store'
import { DOTS_DEFAULTS } from './default'

export default (
    state = DOTS_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case DOTS_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
