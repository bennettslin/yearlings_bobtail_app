import { getBoolFromStorage } from '../../utils/storage'
import { IS_CAROUSEL_EXPANDED, IS_TEXT_JUSTIFIED } from '../../constants/store'

const IS_STORED_CAROUSEL_EXPANDED = getBoolFromStorage(IS_CAROUSEL_EXPANDED)
const IS_STORED_TEXT_JUSTIFIED = getBoolFromStorage(IS_TEXT_JUSTIFIED)

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
        isTextJustified: IS_STORED_TEXT_JUSTIFIED,
    },
})
