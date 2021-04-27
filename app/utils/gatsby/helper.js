import {
    getAlbumReducers,
    getPitchReducers,
} from '../../redux'
import {
    getIsStorePath,
    getIsValidAdminPath,
    getIsValidPitchPagePath,
    getIsValidPromoPagePath,
} from '../routing/path'
import {
    getIsServerSide,
    getIsAlbumSession,
} from '../browser'

export const getIsPitchPage = pathname => (
    getIsValidPitchPagePath(pathname) &&

    /**
     * Ensure that we are not in the pitch popup, since it will also show the
     * Pitch pathname while it is open.
     */
    !getIsAlbumSession()
)

export const getIsPromoPage = pathname => (
    getIsValidPromoPagePath(pathname) &&

    /**
     * Ensure that we are not in the promo popup, since it will also show the
     * Promo pathname while it is open.
     */
    !getIsAlbumSession()
)

export const getNeedsStoreProvider = pathname => {
    /**
     * If we're on the server side, then we don't have access to the pathname,
     * so just always wrap it in the store provider.
     */
    if (getIsServerSide()) {
        return true
    }

    return getIsStorePath(pathname)
}

export const getReducers = ({
    innerHeight,
    innerWidth,
    pathname,
    search,
}) => (
    getIsPitchPage(pathname) ?
        getPitchReducers({
            innerHeight,
            innerWidth,
            pathname,
        }) :
        getAlbumReducers({
            innerHeight,
            innerWidth,
            pathname,
            search,
        })
)

export const getNeedsAlbumContext = pathname => (
    !getIsPitchPage(pathname) &&
    !getIsPromoPage(pathname) &&
    !getIsValidAdminPath(pathname)
)
