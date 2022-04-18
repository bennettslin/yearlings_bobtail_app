// Actions for promo pages.
import { PROMO_STORE } from '../../constants/store'
import { SET_PITCH_SLIDE_INDEX } from './default'

export const setPitchSlideIndex = (pitchSlideIndex = 0) => ({
    type: SET_PITCH_SLIDE_INDEX,
    payload: { pitchSlideIndex },
})

export const setSelectedPromoKey = (selectedPromoKey = '') => ({
    type: PROMO_STORE,
    payload: { selectedPromoKey },
})
