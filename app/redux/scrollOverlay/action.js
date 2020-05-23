// Actions for scrolling overlay values.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { SCROLL_OVERLAY_STORE } from '../../constants/store'

export const updateScrollOverlayStore = payload => ({
    type: SCROLL_OVERLAY_STORE,
    payload: getDefinedOnlyPayload(payload)
})
