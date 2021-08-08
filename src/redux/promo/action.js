// Actions for promo pages.
import { PROMO_STORE } from '../../constants/store'

export const setArtupSlideIndex = (artupSlideIndex = 0) => ({
    type: PROMO_STORE,
    payload: { artupSlideIndex },
})

export const setArtup2SlideIndex = (artup2SlideIndex = 0) => ({
    type: PROMO_STORE,
    payload: { artup2SlideIndex },
})

export const setSelectedPromoKey = (selectedPromoKey = '') => ({
    type: PROMO_STORE,
    payload: { selectedPromoKey },
})
