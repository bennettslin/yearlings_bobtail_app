// Reducers for scrolling carousel values.
import { SCROLL_CAROUSEL_STORE } from '../../constants/store'
import { SCROLL_CAROUSEL_DEFAULTS } from './default'

export default (
    state = SCROLL_CAROUSEL_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SCROLL_CAROUSEL_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
