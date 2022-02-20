import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PARETO_SUBPATH,
} from '../constants/routing'

export const getIsPromoHomepage = promoKey => (
    promoKey === ''
)

export const getIsArtupPage = promoKey => (
    promoKey === ARTUP_SUBPATH
)

export const getIsParetoPage = promoKey => (
    promoKey === PARETO_SUBPATH
)

export const getIsPitchPage = promoKey => (
    getIsArtupPage(promoKey) ||
    getIsParetoPage(promoKey)
)

export const getIsOnesheetPage = promoKey => (
    promoKey === ONESHEET_SUBPATH
)
