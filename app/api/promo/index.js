import { getPromo } from '../builds'
import { PROMO_PATH } from '../../constants/routing'

export const getTitleForPromo = promoKey => (
    getPromo().titles[promoKey] ||
    getPromo().titles[PROMO_PATH]
)
