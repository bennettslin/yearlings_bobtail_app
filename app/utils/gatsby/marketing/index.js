import { getIsAlbumSession } from '../../browser'
import { getRoutingArtupIndex } from '../routing'
import { getPathForArtupSlide } from '../../../api/artup/slides'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PROMO_PATH,
} from '../../../constants/routing'

const _getIsValidPromoRootPath = pathname => (
    pathname === PROMO_PATH
)

const _getIsValidOnesheetPath = pathname => (
    pathname === `${PROMO_PATH}/${ONESHEET_SUBPATH}`
)

const _getIsValidArtupPath = pathname => {
    // Check if it's a valid artup root path.
    if (pathname === `${PROMO_PATH}/${ARTUP_SUBPATH}`) {
        return true
    }

    // Check if it's a valid artup page path.
    const routingArtupIndex = getRoutingArtupIndex(pathname)
    if (Number.isFinite(routingArtupIndex)) {
        return pathname === `${PROMO_PATH}/${ARTUP_SUBPATH}/${routingArtupIndex}-${getPathForArtupSlide(routingArtupIndex)}`
    }

    return false
}

export const getIsMarketingPage = pathname => (
    /**
     * Ensure that we are not in a marketing popup, since it will also show a
     * marketing pathname while it is open.
     */
    !getIsAlbumSession() && (
        _getIsValidPromoRootPath(pathname) ||
        _getIsValidOnesheetPath(pathname) ||
        _getIsValidArtupPath(pathname)
    )
)
