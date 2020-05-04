// Actions for scrolling overlay values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SCROLL_OVERLAY_STORE } from '../storeKeys'
import { SCROLL_OVERLAY_DEFAULTS } from '../defaultStates'

export const updateScrollOverlayStore = (
    payload = SCROLL_OVERLAY_DEFAULTS

) => ({
    type: SCROLL_OVERLAY_STORE,
    payload: getDefinedOnlyPayload(payload)
})
