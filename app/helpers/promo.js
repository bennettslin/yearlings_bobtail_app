import {
    ARTUP_SUBPATH,
    ARTUP_2_SUBPATH,
    ONESHEET_SUBPATH,
} from '../constants/routing'

export const getIsPromoHomepage = promoKey => (
    promoKey === ''
)

export const getIsArtupPage = promoKey => (
    promoKey === ARTUP_SUBPATH
)

export const getIsArtup2Page = promoKey => (
    promoKey === ARTUP_2_SUBPATH
)

export const getIsOnesheetPage = promoKey => (
    promoKey === ONESHEET_SUBPATH
)
