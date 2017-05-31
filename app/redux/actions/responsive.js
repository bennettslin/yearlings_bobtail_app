// Actions for state based on window size.
import { IS_CAROUSEL_EXPANDABLE,
         IS_HIDDEN_NAV } from '../../constants/state'

export const setIsCarouselExpandable = (isCarouselExpandable = false) => (
    { type: IS_CAROUSEL_EXPANDABLE,
      payload: isCarouselExpandable }
)

export const setIsHiddenNav = (isHiddenNav = false) => (
    { type: IS_HIDDEN_NAV,
      payload: isHiddenNav }
)
