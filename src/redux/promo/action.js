// Actions for promo pages.
import { SET_PITCH_SLIDE_INDEX, SET_SELECTED_PROMO_KEY } from './default'

export const setSelectedPromoKey = (selectedPromoKey = '') => ({
    type: SET_SELECTED_PROMO_KEY,
    payload: { selectedPromoKey },
})

export const setPitchSlideIndex = (pitchSlideIndex = 0) => ({
    type: SET_PITCH_SLIDE_INDEX,
    payload: { pitchSlideIndex },
})
