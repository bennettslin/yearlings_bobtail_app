// Reducers for dots slide activated texts.
import { DOTS_SLIDE_STORE } from '../../constants/store'
import { DOTS_SLIDE_DEFAULTS } from './default'

export default (
    state = DOTS_SLIDE_DEFAULTS,
    action
) => {
    switch (action.type) {
        case DOTS_SLIDE_STORE:
            return {
                ...state,
                ...action.payload || DOTS_SLIDE_DEFAULTS
            }
        default:
            return state
    }
}
