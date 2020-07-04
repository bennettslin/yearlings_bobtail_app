import { HOVER_STORE } from '../../constants/store'

export const mapIsScrolling = (
    { [HOVER_STORE]: { isScrolling } }
) => isScrolling

export const mapIsAnchorMoused = (
    { [HOVER_STORE]: { isAnchorMoused } }
) => isAnchorMoused
