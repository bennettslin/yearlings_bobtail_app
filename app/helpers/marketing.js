import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../constants/routing'

export const getIsPromoRootPath = promoPath => (
    promoPath === ''
)

export const getIsArtupPage = promoPath => (
    promoPath === ARTUP_SUBPATH
)

export const getIsOnesheetPage = promoPath => (
    promoPath === ONESHEET_SUBPATH
)