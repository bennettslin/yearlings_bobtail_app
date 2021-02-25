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

export const toggleIsPitchShown = () => ({
    type: TOGGLE_STORE,
    payload: { toggledIsPitchShown: true },
})

export const updateIsPitchShown = (isPitchShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isPitchShown },
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
