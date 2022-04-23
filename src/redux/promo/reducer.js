// Reducers for promo pages.
import { navigateToPromoPage } from '../../helpers/navigate'
import { getPromoDefaults, SET_PITCH_SLIDE_INDEX, SET_SELECTED_PROMO_KEY } from './default'

export const getPromoReducer = ({
    initialPitchIndices,
    initialPromoPage,
}) => (
    state = getPromoDefaults({
        initialPitchIndices,
        initialPromoPage,
    }),
    { type, payload },
) => {
    switch (type) {
        case SET_SELECTED_PROMO_KEY: {
            const
                { selectedPromoKey } = payload,
                { pitchSlideIndices } = state

            navigateToPromoPage(
                selectedPromoKey,
                pitchSlideIndices[selectedPromoKey],
            )

            return {
                ...state,
                ...payload,
            }
        }
        case SET_PITCH_SLIDE_INDEX: {
            const
                { pitchSlideIndex } = payload,
                { selectedPromoKey, pitchSlideIndices } = state

            navigateToPromoPage(
                selectedPromoKey,
                pitchSlideIndex,
            )

            return {
                ...state,
                pitchSlideIndices: {
                    ...pitchSlideIndices,
                    // This does NOT check if selected promo key is valid pitch.
                    [selectedPromoKey]: pitchSlideIndex,
                },
            }
        }
        default:
            return state
    }
}
