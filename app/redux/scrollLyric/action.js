// Actions for scrolling lyric values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { SCROLL_LYRIC_STORE } from '../storeKeys'
import {
    SCROLL_LYRIC_DEFAULTS,
    SCROLL_LYRIC_QUEUE_DEFAULTS
} from '../defaultStates'

export const updateScrollLyricStore = (
    payload = SCROLL_LYRIC_DEFAULTS

) => {
    const { queuedScrollLyricLog } = payload

    if (hasKey(queuedScrollLyricLog)) {
        payload.isScrollingLyric = true
    }

    return ({
        type: SCROLL_LYRIC_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const resetScrollLyricQueue = () => ({
    type: SCROLL_LYRIC_STORE,
    payload: SCROLL_LYRIC_QUEUE_DEFAULTS
})
