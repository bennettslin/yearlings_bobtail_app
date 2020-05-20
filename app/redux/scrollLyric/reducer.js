// Reducers for scrolling lyric values.
import { SCROLL_LYRIC_STORE } from '../../constants/store'
import { SCROLL_LYRIC_DEFAULTS } from './default'

export default (
    state = SCROLL_LYRIC_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SCROLL_LYRIC_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
