export const SET_SELECTED_PROMO_KEY = 'setSelectedPromoKey'
export const SET_PITCH_SLIDE_INDEX = 'setPitchSlideIndex'
export const UPDATE_PROMO_FROM_BROWSER_NAV = 'updatePromoFromBrowserNav'

export const getPromoDefaults = ({
    initialPitchIndices,
    initialPromoPage = '',
}) => ({
    selectedPromoKey: initialPromoPage,
    pitchSlideIndices: initialPitchIndices,
})
