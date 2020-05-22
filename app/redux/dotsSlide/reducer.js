// Reducers for dots slide activated texts.
import { DOTS_SLIDE_STORE } from '../../constants/store'
import { DOTS_SLIDE_DEFAULTS } from './default'

export default (
    state = DOTS_SLIDE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case DOTS_SLIDE_STORE:
            return {
                ...state,
                ...payload || DOTS_SLIDE_DEFAULTS
            }
        default:
            return state
    }
}
