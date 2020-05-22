// Reducers for banner state.
import { BANNER_STORE } from '../../constants/store'
import { BANNER_DEFAULTS } from './default'

export default (
    state = BANNER_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case BANNER_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
