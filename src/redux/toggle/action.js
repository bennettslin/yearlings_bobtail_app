// Actions for toggled views.
import { setBoolInStorage } from '../../utils/storage'
import {
    TOGGLE_STORE,
    IS_CAROUSEL_EXPANDED,
} from '../../constants/store'

export const toggleIsAboutShown = () => ({
    type: TOGGLE_STORE,
    payload: { toggledIsAboutShown: true },
})

export const updateIsAboutShown = (isAboutShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isAboutShown },
})

export const toggleIsAudioOptionsExpanded = () => ({
    type: TOGGLE_STORE,
    payload: { toggledIsAudioOptionsExpanded: true },
})

export const updateIsAudioOptionsExpanded = (
    isAudioOptionsExpanded = false,
) => ({
    type: TOGGLE_STORE,
    payload: { isAudioOptionsExpanded },
})

export const updateIsPromoShown = (isPromoShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isPromoShown },
})

export const updateIsCarouselExpanded = (isCarouselExpanded = false) => {
    setBoolInStorage(IS_CAROUSEL_EXPANDED, isCarouselExpanded)

    return ({
        type: TOGGLE_STORE,
        payload: { isCarouselExpanded },
    })
}

export const updateIsAutoScroll = (isAutoScroll = false) => ({
    type: TOGGLE_STORE,
    payload: { isAutoScroll },
})

export const updateIsDotsSlideShown = (isDotsSlideShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isDotsSlideShown },
})

export const updateIsLyricExpanded = (isLyricExpanded = false) => ({
    type: TOGGLE_STORE,
    payload: { isLyricExpanded },
})

export const updateIsNavExpanded = (isNavExpanded = false) => ({
    type: TOGGLE_STORE,
    payload: { isNavExpanded },
})

export const updateIsScoreShown = (isScoreShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isScoreShown },
})

/**
 * This is only ever used for admin purposes and may be removed at any time.
 */
export const adminToggleIsPromoShown = () => ({
    type: TOGGLE_STORE,
    payload: { toggledIsPromoShown: true },
})
