// Actions for determining verse bars.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { VERSE_BARS_STORE } from '../../constants/store'
import {
    VERSE_BARS_STATUS_DEFAULTS,
    VERSE_BARS_QUEUE_DEFAULTS
} from './default'

export const updateVerseBarsStore = payload => ({
    type: VERSE_BARS_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const resetVerseBars = () => ({
    type: VERSE_BARS_STORE,
    payload: VERSE_BARS_STATUS_DEFAULTS
})

export const resetVerseBarsQueue = () => ({
    type: VERSE_BARS_STORE,
    payload: VERSE_BARS_QUEUE_DEFAULTS
})
