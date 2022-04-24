// Reducers for promo pages.
import { PITCH_KEYS } from '../../constants/routing'
import { hasKey } from '../../helpers/action'
import { navigateToPromoPage } from '../../helpers/navigate'
import { getPromoDefaults, UPDATE_PROMO } from './default'

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
        case UPDATE_PROMO: {
            const
                {
                    selectedPromoKey: nextPromoKey,
                    pitchSlideIndex: nextPitchIndex,
                    bypassNavigation,
                } = payload,
                { selectedPromoKey, pitchSlideIndices } = state

            if (!bypassNavigation) {
                navigateToPromoPage(
                    hasKey(nextPromoKey) ? nextPromoKey : selectedPromoKey,
                    hasKey(nextPitchIndex) ?
                        nextPitchIndex :
                        pitchSlideIndices[selectedPromoKey],
                )
            }

            return {
                ...state,
                ...hasKey(nextPromoKey) && {
                    selectedPromoKey: nextPromoKey,
                },
                ...hasKey(nextPitchIndex) && {
                    pitchSlideIndices: {
                        ...pitchSlideIndices,
                        ...PITCH_KEYS.includes(
                            nextPromoKey || selectedPromoKey,
                        ) && {
                            [selectedPromoKey]: nextPitchIndex,
                        },
                    },
                },
            }
        }
        default:
            return state
    }
}
