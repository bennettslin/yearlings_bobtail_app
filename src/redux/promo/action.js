// Actions for promo pages.
import { PROMO_STORE } from '../../constants/store'

export const setArtupSlideIndex = (artupSlideIndex = 0) => ({
    type: PROMO_STORE,
    payload: { artupSlideIndex },
})

export const setParetoSlideIndex = (paretoSlideIndex = 0) => ({
    type: PROMO_STORE,
    payload: { paretoSlideIndex },
})

export const setSelectedPromoKey = (selectedPromoKey = '') => ({
    type: PROMO_STORE,
    payload: { selectedPromoKey },
})
