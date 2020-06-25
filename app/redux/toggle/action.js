// Actions for toggled views.
import { setBoolInStorage } from '../../helpers/storage'
import {
    TOGGLE_STORE,
    IS_CAROUSEL_SHOWN
} from '../../constants/store'

export const toggleIsCarouselShown = isCarouselShown => {
    setBoolInStorage(IS_CAROUSEL_SHOWN, isCarouselShown)

    return ({
        type: TOGGLE_STORE,
        payload: { isCarouselShown }
    })
}

// TODO: Make these a single action creator?
export const toggleIsAboutShown = () => ({
    type: TOGGLE_STORE,
    payload: { toggleIsAboutShown: true }
})

export const updateIsAboutShown = (isAboutShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isAboutShown }
})

export const toggleIsAutoScroll = (isAutoScroll = false) => ({
    type: TOGGLE_STORE,
    payload: { isAutoScroll }
})

export const toggleIsDotsSlideShown = (isDotsSlideShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isDotsSlideShown }
})

export const toggleIsLyricExpanded = (isLyricExpanded = false) => ({
    type: TOGGLE_STORE,
    payload: { isLyricExpanded }
})

export const toggleIsNavShown = (isNavShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isNavShown }
})

export const toggleIsScoreShown = (isScoreShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isScoreShown }
})
