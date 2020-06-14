import { SCROLL_OVERLAY_STORE } from '../../constants/store'

export const mapIsScrolling = (
    { [SCROLL_OVERLAY_STORE]: { isScrolling } }
) => isScrolling
