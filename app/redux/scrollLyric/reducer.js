// Reducers for scrolling lyric values.
import {
    SCROLL_LYRIC_STORE,
    TOGGLE_STORE,
    VIEWPORT_STORE
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
            const {
                isAutoScroll,
                isLyricExpanded
            } = payload
            return {
                ...state,
                ...hasKey(isAutoScroll) && isAutoScroll && {
                    scrollLyricLog: 'AutoScrolled',
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                },
                ...hasKey(isLyricExpanded) && {
                    scrollLyricLog:
                        `Lyric ${isLyricExpanded ? 'expanded' : 'collapsed'}`,
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                }
            }
        }
        case VIEWPORT_STORE: {
            const { isHeightlessLyric } = payload
            return hasKey(isHeightlessLyric) && !isHeightlessLyric ? {
                ...state,
                ...{
                    scrollLyricLog: 'Lyric heighted',
                    scrollLyricByVerse: true,
                    scrollLyricAlways: true
                }
            } : state
        }
        default:
            return state
    }
}
