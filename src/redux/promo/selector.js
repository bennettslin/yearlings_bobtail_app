import { PROMO_STORE } from '../../constants/store'

export const mapArtupSlideIndex = (
    { [PROMO_STORE]: { artupSlideIndex } },
) => artupSlideIndex

export const mapParetoSlideIndex = (
    { [PROMO_STORE]: { paretoSlideIndex } },
) => paretoSlideIndex

export const mapSelectedPromoKey = (
    { [PROMO_STORE]: { selectedPromoKey } },
) => selectedPromoKey
