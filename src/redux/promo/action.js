// Actions for promo pages.
import { getPromoDefaults, UPDATE_PROMO } from './default'

export const updatePromo = payload => ({
    type: UPDATE_PROMO,
    payload,
})

export const resetPromo = () => (
    updatePromo({ selectedPromoKey: getPromoDefaults().selectedPromoKey })
)
