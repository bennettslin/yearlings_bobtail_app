import { getBoolFromStorage } from '../../utils/storage'
import { IS_CAROUSEL_EXPANDED } from '../../constants/store'

const IS_STORED_CAROUSEL_EXPANDED = getBoolFromStorage(IS_CAROUSEL_EXPANDED)

export const getToggleDefaults = isPromoPage => ({
    // This lets copy URL button know if promo is shown, even on promo page.
    isPromoShown: isPromoPage,

    ...!isPromoPage && {
        isAboutShown: false,
        isAudioOptionsExpanded: false,
        isAutoScroll: true,
        isCarouselExpanded: IS_STORED_CAROUSEL_EXPANDED,
        isNavExpanded: false,
        isDotsSlideShown: false,
        isLyricExpanded: false,
        isScoreShown: false,
    },
})
