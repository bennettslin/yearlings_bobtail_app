// Reducers for scrolling lyric values.
import {
    SCROLL_LYRIC_STORE,
    TOGGLE_STORE
} from '../../constants/store'
import { SCROLL_LYRIC_DEFAULTS } from './default'
import { hasKey } from '../../helpers/action'

export default (
    state = SCROLL_LYRIC_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SCROLL_LYRIC_STORE:
            return {
                ...state,
                ...payload
            }
        case TOGGLE_STORE: {
            const { isAutoScroll } = payload
            return hasKey(isAutoScroll) && isAutoScroll ? {
                ...state,
                ...{
                    scrollLyricLog:
                        'VerseBar or autoScroll back to selected verse.',
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                }
            } : state
        }
        default:
            return state
    }
}
