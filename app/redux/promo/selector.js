import { PROMO_STORE } from '../../constants/store'

export const mapArtupSlideIndex = (
    { [PROMO_STORE]: { artupSlideIndex } },
) => artupSlideIndex

export const mapArtup2SlideIndex = (
    { [PROMO_STORE]: { artup2SlideIndex } },
) => artup2SlideIndex

export const mapSelectedPromoKey = (
    { [PROMO_STORE]: { selectedPromoKey } },
) => selectedPromoKey
