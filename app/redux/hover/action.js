// Actions for scrolling overlay values.
import { HOVER_STORE } from '../../constants/store'

export const updateIsScrolling = isScrolling => ({
    type: HOVER_STORE,
    payload: { isScrolling },
})

export const updateIsAnchorMoused = isAnchorMoused => ({
    type: HOVER_STORE,
    payload: { isAnchorMoused },
})
