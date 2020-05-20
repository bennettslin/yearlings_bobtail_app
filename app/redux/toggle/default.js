import { IS_STORED_CAROUSEL_SHOWN } from '../../constants/storage'

export const TOGGLE_DEFAULTS = {
    isAutoScroll: true,
    isCarouselShown: IS_STORED_CAROUSEL_SHOWN || false,
    isNavShown: false,
    isDotsSlideShown: false,
    isLyricExpanded: false,
    isScoreShown: false,
    isAboutShown: false
}
