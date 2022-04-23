export const SET_SELECTED_PROMO_KEY = 'setSelectedPromoKey'
export const SET_PITCH_SLIDE_INDEX = 'setPitchSlideIndex'

export const getPromoDefaults = ({
    initialPitchIndices,
    initialPromoPage = '',
}) => ({
    selectedPromoKey: initialPromoPage,
    pitchSlideIndices: initialPitchIndices,
})
