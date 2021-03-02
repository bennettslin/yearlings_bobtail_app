// Actions for focus values.
import { FOCUS_STORE } from '../../constants/store'
import { FOCUS_DEFAULTS } from './default'

export const updateQueuedFocus = (
    queuedFocus = FOCUS_DEFAULTS.queuedFocus
) => ({
    type: FOCUS_STORE,
    payload: { queuedFocus },
})
