// Actions for scrolling lyric values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SCROLL_LYRIC_STORE } from '../../constants/store/keys'
import { SCROLL_LYRIC_DEFAULTS } from '../defaultStates'

export const updateScrollLyricStore = (payload = SCROLL_LYRIC_DEFAULTS) => ({
    type: SCROLL_LYRIC_STORE,
    payload: getDefinedOnlyPayload(payload)
})
