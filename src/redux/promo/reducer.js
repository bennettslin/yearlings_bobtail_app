// Reducers for promo pages.
import { PITCH_KEYS } from '../../constants/routing'
import { navigateToPromoPage } from '../../helpers/navigate'
import { getPromoDefaults, SET_PITCH_SLIDE_INDEX, SET_SELECTED_PROMO_KEY, UPDATE_PROMO_FROM_BROWSER_NAV } from './default'

const getUpdatedPitchSlideIndices = ({
    pitchSlideIndices,
    selectedPromoKey,
    pitchSlideIndex,
}) => ({
    ...pitchSlideIndices,
    ...PITCH_KEYS.includes(selectedPromoKey) && {
        [selectedPromoKey]: pitchSlideIndex,
    },
})

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
                pitchSlideIndices: getUpdatedPitchSlideIndices({
                    pitchSlideIndices,
                    selectedPromoKey,
                    pitchSlideIndex,
                }),
            }
        }
        case UPDATE_PROMO_FROM_BROWSER_NAV: {
            const
                { selectedPromoKey, pitchSlideIndex } = payload,
                { pitchSlideIndices } = state
            return {
                ...state,
                selectedPromoKey,
                pitchSlideIndices: getUpdatedPitchSlideIndices({
                    pitchSlideIndices,
                    selectedPromoKey,
                    pitchSlideIndex,
                }),
            }
        }
        default:
            return state
    }
}
