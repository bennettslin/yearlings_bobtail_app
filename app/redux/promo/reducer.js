// Reducers for promo pages.
import { PROMO_STORE } from '../../constants/store'
import { getPromoDefaults } from './default'

export const getPromoReducer = ({
    initialArtupIndex,
    initialPromoPage,
}) => (
    state = getPromoDefaults({
        initialArtupIndex,
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
        default:
            return state
    }
}