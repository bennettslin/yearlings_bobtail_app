import { PROMO_STORE } from '../../constants/store'

export const mapArtupSlideIndex = (
    { [PROMO_STORE]: { artupSlideIndex } },
) => artupSlideIndex

export const mapSelectedPromoPath = (
    { [PROMO_STORE]: { selectedPromoPath } },
) => selectedPromoPath
