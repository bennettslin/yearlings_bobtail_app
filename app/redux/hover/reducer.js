// Reducers for hovering values.
import { HOVER_STORE } from '../../constants/store'
import { HOVER_DEFAULTS } from './default'

export default (
    state = HOVER_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case HOVER_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
