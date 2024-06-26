import { createSelector } from 'reselect'
import { PROMO_STORE } from '../../constants/store'

export const mapSelectedPromoKey = (
    { [PROMO_STORE]: { selectedPromoKey } },
) => selectedPromoKey

const mapPitchSlideIndices = (
    { [PROMO_STORE]: { pitchSlideIndices } },
) => pitchSlideIndices

export const getMapPitchSlideIndex = pitchKey => createSelector(
    mapPitchSlideIndices,
    pitchSlideIndices => pitchSlideIndices[pitchKey],
)

export const mapSelectedPitchSlideIndex = createSelector(
    mapSelectedPromoKey,
    mapPitchSlideIndices,
    (
        selectedPromoKey,
        pitchSlideIndices,

    // Return -1 if selected promo key is not valid pitch.
    ) => pitchSlideIndices[selectedPromoKey] || -1,
)
