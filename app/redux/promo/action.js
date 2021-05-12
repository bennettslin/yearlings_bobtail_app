// Actions for promo pages.
import { setInStorage } from '../../utils/storage'
import {
    ARTUP_SLIDE_INDEX,
    PROMO_STORE,
    SELECTED_PROMO_PAGE,
} from '../../constants/store'

export const setArtupSlideIndex = (artupSlideIndex = 0) => {
    setInStorage(ARTUP_SLIDE_INDEX, artupSlideIndex)

    return {
        type: PROMO_STORE,
        payload: { artupSlideIndex },
    }
}

export const setSelectedPromoPage = (selectedPromoPage = '') => {
    setInStorage(SELECTED_PROMO_PAGE, selectedPromoPage)

    return {
        type: PROMO_STORE,
        payload: { selectedPromoPage },
    }
}
