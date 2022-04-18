import {
    ONESHEET_SUBPATH,
    PITCH_KEYS,
} from '../constants/routing'

export const getIsPromoHomepage = promoKey => (
    promoKey === ''
)

export const getIsPitchPage = promoKey => (
    PITCH_KEYS.some(pitchKey => promoKey === pitchKey)
)

export const getIsOnesheetPage = promoKey => (
    promoKey === ONESHEET_SUBPATH
)
