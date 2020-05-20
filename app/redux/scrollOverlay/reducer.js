// Reducers for scrolling lyric values.
import { SCROLL_OVERLAY_STORE } from '../../constants/store'
import { SCROLL_OVERLAY_DEFAULTS } from './default'

export default (
    state = SCROLL_OVERLAY_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SCROLL_OVERLAY_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
