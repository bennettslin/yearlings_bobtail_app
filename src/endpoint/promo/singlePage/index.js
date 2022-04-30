import { getPromo } from '../../builds'

export const getBodyForPromoSinglePage = promoKey => (
    getPromo()[promoKey || 'homepage'].body
)
