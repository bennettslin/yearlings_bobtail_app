import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../constants/routing'

export const getIsPromoRootPath = promoPath => (
    promoPath === ''
)

export const getShowArtupPage = promoPath => (
    promoPath === ARTUP_SUBPATH
)

export const getShowOnesheetPage = promoPath => (
    promoPath === ONESHEET_SUBPATH
)
