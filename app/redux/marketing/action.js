// Actions for marketing.
import { setInStorage } from '../../utils/storage'
import {
    ARTUP_SLIDE_INDEX,
    MARKETING_STORE,
    SELECTED_PROMO_PATH,
} from '../../constants/store'

export const setArtupSlideIndex = (artupSlideIndex = 0) => {
    setInStorage(ARTUP_SLIDE_INDEX, artupSlideIndex)

    return {
        type: MARKETING_STORE,
        payload: { artupSlideIndex },
    }
}

export const setSelectedPromoPath = (selectedPromoPath = '') => {
    setInStorage(SELECTED_PROMO_PATH, selectedPromoPath)

    return {
        type: MARKETING_STORE,
        payload: { selectedPromoPath },
    }
}
