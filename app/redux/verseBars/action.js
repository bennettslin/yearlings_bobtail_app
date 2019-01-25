// Actions for determining verse bars.
import { getDefinedOnlyPayload } from '../actionHelper'

import { VERSE_BARS_STORE } from '../storeKeys'
import {
    VERSE_BARS_DEFAULTS,
    VERSE_BARS_POSITION_DEFAULTS,
    VERSE_BARS_QUEUE_DEFAULTS
} from '../defaultStates'

export const updateVerseBarsStore = (payload = VERSE_BARS_DEFAULTS) => ({
    type: VERSE_BARS_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetVerseBars = () => ({
    type: VERSE_BARS_STORE,
    payload: VERSE_BARS_POSITION_DEFAULTS
})

export const resetVerseBarsQueue = () => ({
    type: VERSE_BARS_STORE,
    payload: VERSE_BARS_QUEUE_DEFAULTS
})
