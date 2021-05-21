import { getPromo } from '../builds'

export const getTitleForPromo = promoKey => (
    getPromo().titles[promoKey] || getPromo().titles.homepage
)
