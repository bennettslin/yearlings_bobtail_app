export const UPDATE_PROMO = 'updatePromo'

export const getPromoDefaults = ({
    initialPitchIndices,
    initialPromoPage = '',
} = {}) => ({
    selectedPromoKey: initialPromoPage,
    pitchSlideIndices: initialPitchIndices,
})
