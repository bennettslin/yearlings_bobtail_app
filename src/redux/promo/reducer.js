// Reducers for promo pages.
import { PROMO_STORE } from '../../constants/store'
import { getPromoDefaults, SET_PITCH_SLIDE_INDEX } from './default'

export const getPromoReducer = ({
    initialArtupIndex,
    initialParetoIndex,
    initialPromoPage,
}) => (
    state = getPromoDefaults({
        initialArtupIndex,
        initialParetoIndex,
        initialPromoPage,
    }),
    { type, payload },
) => {
    switch (type) {
        case PROMO_STORE:
            return {
                ...state,
                ...payload,
            }
        case SET_PITCH_SLIDE_INDEX: {
            const
                { pitchKey, pitchSlideIndex } = payload,
                { pitchSlideIndices } = state

            return {
                ...state,
                pitchSlideIndices: {
                    ...pitchSlideIndices,
                    [pitchKey]: pitchSlideIndex,
                },
            }
        }
        default:
            return state
    }
}
