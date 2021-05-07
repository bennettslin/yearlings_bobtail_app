// Reducers for marketing pages.
import { MARKETING_STORE } from '../../constants/store'
import { getMarketingDefaults } from './default'

export const getMarketingReducer = ({
    initialArtupIndex,
    initialPromoPage,
}) => (
    state = getMarketingDefaults({
        initialArtupIndex,
        initialPromoPage,
    }),
    { type, payload },
) => {
    switch (type) {
        case MARKETING_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
