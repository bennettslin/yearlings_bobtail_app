// Reducers for scrolling carousel values.
import { SCROLL_CAROUSEL_STORE } from '../storeKeys'
import { SCROLL_CAROUSEL_DEFAULTS } from '../defaultStates'

export default (
    state = SCROLL_CAROUSEL_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SCROLL_CAROUSEL_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
