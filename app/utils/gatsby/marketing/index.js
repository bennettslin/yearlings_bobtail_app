import {
    getIsAlbumSession,
} from '../../browser'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PROMO_PATH,
} from '../../../constants/routing'
import { getRoutingArtupIndex } from '../routing'

const _getIsValidPromoRootPath = pathname => (
    pathname === PROMO_PATH
)

const _getIsValidOnesheetPath = pathname => (
    pathname === `${PROMO_PATH}/${ONESHEET_SUBPATH}`
)

const _getIsValidArtupPath = pathname => (
    pathname === `${PROMO_PATH}/${ARTUP_SUBPATH}` || (
        pathname.includes(`${PROMO_PATH}/${ARTUP_SUBPATH}/`) &&
        Number.isFinite(getRoutingArtupIndex(pathname))
    )
)

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
