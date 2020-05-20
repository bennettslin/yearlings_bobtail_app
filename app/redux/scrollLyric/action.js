// Actions for scrolling lyric values.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { SCROLL_LYRIC_STORE } from '../../constants/store'
import { SCROLL_LYRIC_DEFAULTS } from './default'

export const updateScrollLyricStore = (payload = SCROLL_LYRIC_DEFAULTS) => ({
    type: SCROLL_LYRIC_STORE,
    payload: getDefinedOnlyPayload(payload)
})
