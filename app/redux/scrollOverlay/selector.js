import { SCROLL_OVERLAY_STORE } from '../../constants/store'

export const mapIsScrolling = (
    { [SCROLL_OVERLAY_STORE]: { isScrolling } }
) => isScrolling

export const mapIsAnchorMoused = (
    { [SCROLL_OVERLAY_STORE]: { isAnchorMoused } }
) => isAnchorMoused
