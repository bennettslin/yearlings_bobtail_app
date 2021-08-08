import { getPromo } from '../builds'
import { PROMO_PATH } from '../../constants/routing'

export const getTitleForPromo = promoKey => (
    getPromo().directory[promoKey || PROMO_PATH].title
)

export const getDescriptionForPromo = promoKey => (
    getPromo().directory[promoKey || PROMO_PATH].description
)
