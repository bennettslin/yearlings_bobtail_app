import { getRoutingPitchIndex } from '../routing'
import { getIsAlbumClientSession } from '../session'
import { getPathForSlide } from '../../../endpoint/promo/pitches'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PARETO_SUBPATH,
    PROMO_PATH,
} from '../../../constants/routing'

export const getPromoPath = promoKey => (
    promoKey ? `${PROMO_PATH}/${promoKey}` : PROMO_PATH
)

const _getIsValidPromoHomepagePath = pathname => (
    pathname === PROMO_PATH
)

const _getIsValidOnesheetPath = pathname => (
    pathname === getPromoPath(ONESHEET_SUBPATH)
)

const _getIsValidPitchPath = (pitchKey, pathname) => {
    const promoPath = getPromoPath(pitchKey)
    // Check if it's a valid pitch root path.
    if (pathname === promoPath) {
        return true
    }

    // Check if it's a valid pitch page path.
    const routingPitchIndex = getRoutingPitchIndex(pitchKey, pathname)
    if (Number.isFinite(routingPitchIndex)) {
        return pathname === `${
            promoPath
        }/${
            routingPitchIndex
        }-${
            getPathForSlide(pitchKey, routingPitchIndex)
        }`
    }

    return false
}

export const getIsPromoPage = pathname => (
    /**
     * Ensure that we are not in a promo popup, since it will also show a
     * promo pathname while it is open.
     */
    !getIsAlbumClientSession() && (
        _getIsValidPromoHomepagePath(pathname) ||
        _getIsValidOnesheetPath(pathname) ||
        _getIsValidPitchPath(ARTUP_SUBPATH, pathname) ||
        _getIsValidPitchPath(PARETO_SUBPATH, pathname)
    )
)
