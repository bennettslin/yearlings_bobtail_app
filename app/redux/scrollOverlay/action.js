// Actions for scrolling overlay values.
import { SCROLL_OVERLAY_STORE } from '../../constants/store'

export const updateIsScrolling = isScrolling => ({
    type: SCROLL_OVERLAY_STORE,
    payload: { isScrolling }
})
