// Reducers for dots slide interactivated texts.
import { DOTS_SLIDE_STORE } from '../storeKeys'
import { DOTS_SLIDE_DEFAULTS } from '../defaultStates'

export default (
    state = DOTS_SLIDE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case DOTS_SLIDE_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
