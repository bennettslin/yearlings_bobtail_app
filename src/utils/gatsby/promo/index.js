import { getRoutingPitchIndex } from '../routing'
import { getIsAlbumClientSession } from '../session'
import { getPathForSlide } from '../../../endpoint/promo/pitches'
import {
    ONESHEET_SUBPATH,
    PITCH_KEYS,
    PROMO_PATH,
    ROSALIND_SUBPATH,
} from '../../../constants/routing'

export const getPromoPath = promoKey => (
    promoKey ? `${PROMO_PATH}/${promoKey}` : PROMO_PATH
)

export const getFormattedPromoPath = (promoKey, pitchIndex) => {
    const pitchSubpath = getPathForSlide(promoKey, pitchIndex)
    return [
        getPromoPath(promoKey),
        ...pitchSubpath ? [`${pitchIndex}-${pitchSubpath}`] : [],
    ].join('/')
}

const _getIsValidPromoSinglePagePath = pathname => (
    pathname === PROMO_PATH ||
    pathname === getPromoPath(ONESHEET_SUBPATH) ||
    pathname === getPromoPath(ROSALIND_SUBPATH)
)

const _getIsValidPitchPath = (pitchKey, pathname) => {
    // Check if it's a valid pitch root path.
    if (pathname === getPromoPath(pitchKey)) {
        return true
    }

    // Check if it's a valid pitch page path.
    const routingPitchIndex = getRoutingPitchIndex(pitchKey, pathname)
    if (Number.isFinite(routingPitchIndex)) {
        return pathname === getFormattedPromoPath(pitchKey, routingPitchIndex)
    }

    return false
}

export const getIsPromoPath = pathname => (
    _getIsValidPromoSinglePagePath(pathname) ||
    PITCH_KEYS.some(pitchKey => (
        _getIsValidPitchPath(pitchKey, pathname)
    ))
)

export const getIsPromoSession = pathname => (
    getIsPromoPath(pathname) &&

    /**
     * Ensure that we are not in a promo popup, since it will also show a
     * promo pathname while it is open.
     */
    !getIsAlbumClientSession()
)
