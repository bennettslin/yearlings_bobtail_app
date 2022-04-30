import { AMNESTICISM_SUBPATH, PITCH_KEYS, ROSALIND_SUBPATH } from '../constants/routing'

export const getIsPromoHomepage = promoKey => (
    promoKey === ''
)

export const getIsPitchPage = promoKey => (
    PITCH_KEYS.some(pitchKey => promoKey === pitchKey)
)

export const getIsDownloadPage = promoKey => (
    promoKey === AMNESTICISM_SUBPATH ||
    promoKey === ROSALIND_SUBPATH
)
