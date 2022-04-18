import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PARETO_SUBPATH,
} from '../constants/routing'

export const getIsPromoHomepage = promoKey => (
    promoKey === ''
)

export const getIsPitchPage = promoKey => (
    promoKey === ARTUP_SUBPATH ||
    promoKey === PARETO_SUBPATH
)

export const getIsOnesheetPage = promoKey => (
    promoKey === ONESHEET_SUBPATH
)
