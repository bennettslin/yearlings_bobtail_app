// Reducers for scrolling lyric values.
import { SCROLL_LYRIC_STORE } from '../storeKeys'
import { SCROLL_LYRIC_DEFAULTS } from '../defaultStates'

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
