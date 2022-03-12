import { getPromo } from '../builds'
import { PROMO_PATH } from '../../constants/routing'

export const getTitleForPromo = (promoKey, isPlainText) => {
    const { plainTitle, title } = getPromo().directory[promoKey || PROMO_PATH]

    return isPlainText && plainTitle ? plainTitle : title
}

export const getDescriptionForPromo = promoKey => (
    getPromo().directory[promoKey || PROMO_PATH].description
)
