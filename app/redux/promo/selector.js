import { PROMO_STORE } from '../../constants/store'

export const mapArtupSlideIndex = (
    { [PROMO_STORE]: { artupSlideIndex } },
) => artupSlideIndex

export const mapSelectedPromoKey = (
    { [PROMO_STORE]: { selectedPromoKey } },
) => selectedPromoKey
