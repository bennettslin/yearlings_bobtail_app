// Actions for state based on window size.
import { IS_CAROUSEL_EXPANDABLE } from '../../constants/state'

export const setIsCarouselExpandable = (isCarouselExpandable = false) => (
    { type: IS_CAROUSEL_EXPANDABLE,
      payload: isCarouselExpandable }
)
