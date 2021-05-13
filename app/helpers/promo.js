import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../constants/routing'

export const getIsPromoHomepage = promoKey => (
    promoKey === ''
)

export const getIsArtupPage = promoKey => (
    promoKey === ARTUP_SUBPATH
)

export const getIsOnesheetPage = promoKey => (
    promoKey === ONESHEET_SUBPATH
)
