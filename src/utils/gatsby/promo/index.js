import { getRoutingArtupIndex } from '../routing'
import { getIsAlbumClientSession } from '../session'
import { getPathForArtupSlide } from '../../../endpoint/promo/artup'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
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

const _getIsValidArtupPath = pathname => {
    const artupPath = getPromoPath(ARTUP_SUBPATH)
    // Check if it's a valid artup root path.
    if (pathname === artupPath) {
        return true
    }

    // Check if it's a valid artup page path.
    const routingArtupIndex = getRoutingArtupIndex(pathname)
    if (Number.isFinite(routingArtupIndex)) {
        return pathname === `${artupPath}/${routingArtupIndex}-${getPathForArtupSlide(routingArtupIndex)}`
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
        _getIsValidArtupPath(pathname)
    )
)