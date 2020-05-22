// Reducers for state based on window size.
import { RESPONSIVE_STORE } from '../../constants/store'
import { RESPONSIVE_DEFAULTS } from './default'

export default (
    state = RESPONSIVE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case RESPONSIVE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
