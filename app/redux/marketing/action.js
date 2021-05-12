// Actions for promo pages.
import { setInStorage } from '../../utils/storage'
import {
    ARTUP_SLIDE_INDEX,
    PROMO_STORE,
    SELECTED_PROMO_PATH,
} from '../../constants/store'

export const setArtupSlideIndex = (artupSlideIndex = 0) => {
    setInStorage(ARTUP_SLIDE_INDEX, artupSlideIndex)

    return {
        type: PROMO_STORE,
        payload: { artupSlideIndex },
    }
}

export const setSelectedPromoPath = (selectedPromoPath = '') => {
    setInStorage(SELECTED_PROMO_PATH, selectedPromoPath)

    return {
        type: PROMO_STORE,
        payload: { selectedPromoPath },
    }
}
