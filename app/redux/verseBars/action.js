// Actions for determining verse bars.
import { getDefinedOnlyPayload } from '../actionHelper'

import { VERSE_BARS_STORE } from '../storeKeys'
import { VERSE_BARS_DEFAULTS } from '../defaultStates'

export const updateVerseBarsStore = (payload = VERSE_BARS_DEFAULTS) => {
    return ({
        type: VERSE_BARS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const resetVerseBars = () => {
    return ({
        type: VERSE_BARS_STORE,
        payload: {
            isVerseBarAbove: false,
            isVerseBarBelow: false
        }
    })
}

export const resetVerseBarsQueue = () => {
    return ({
        type: VERSE_BARS_STORE,
        payload: {
            queuedDetermineVerseBars: false,
            queuedVerseBarsTimeout: 0
        }
    })
}
