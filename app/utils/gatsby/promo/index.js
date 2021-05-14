import { getRoutingArtupIndex } from '../routing'
import { getIsAlbumClientSession } from '../session'
import { getPathForArtupSlide } from '../../../api/promo/artup'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PROMO_PATH,
} from '../../../constants/routing'

export const getOnesheetFullPath = () => `${PROMO_PATH}/${ONESHEET_SUBPATH}`
export const getArtupFullPath = () => `${PROMO_PATH}/${ARTUP_SUBPATH}`

const _getIsValidPromoHomepagePath = pathname => (
    pathname === PROMO_PATH
)

const _getIsValidOnesheetPath = pathname => (
    pathname === getOnesheetFullPath()
)

const _getIsValidArtupPath = pathname => {
    // Check if it's a valid artup root path.
    if (pathname === getArtupFullPath()) {
        return true
    }

    // Check if it's a valid artup page path.
    const routingArtupIndex = getRoutingArtupIndex(pathname)
    if (Number.isFinite(routingArtupIndex)) {
        return pathname === `${getArtupFullPath()}/${routingArtupIndex}-${getPathForArtupSlide(routingArtupIndex)}`
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
