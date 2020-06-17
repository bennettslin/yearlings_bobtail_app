import { getBoolFromStorage } from '../../helpers/storage'
import { IS_CAROUSEL_SHOWN } from '../../constants/store'

const IS_STORED_CAROUSEL_SHOWN = getBoolFromStorage(IS_CAROUSEL_SHOWN)

export const TOGGLE_DEFAULTS = {
    isAboutShown: false,
    isAutoScroll: true,
    isCarouselShown: IS_STORED_CAROUSEL_SHOWN,
    isNavShown: false,
    isDotsSlideShown: false,
    isLyricExpanded: false,
    isScoreShown: false
}
