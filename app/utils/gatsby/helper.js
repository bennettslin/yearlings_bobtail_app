import {
    getAlbumReducers,
    getMarketingReducers,
} from '../../redux'
import {
    getIsStorePath,
    getIsValidAdminPath,
    getIsValidArtupPagePath,
    getIsValidPromoPagePath,
} from '../routing/path'
import {
    getIsServerSide,
    getIsAlbumSession,
} from '../browser'

export const getIsMarketingPage = pathname => (
    (
        getIsValidArtupPagePath(pathname) ||
        getIsValidPromoPagePath(pathname)
    ) &&

    /**
     * Ensure that we are not in a marketing popup, since it will also show a
     * marketing pathname while it is open.
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
    windowHeight,
    windowWidth,
    pathname,
    search,
}) => (
    getIsMarketingPage(pathname) ?
        getMarketingReducers({
            windowHeight,
            windowWidth,
            pathname,
        }) :
        getAlbumReducers({
            windowHeight,
            windowWidth,
            pathname,
            search,
        })
)

export const getNeedsAlbumContext = pathname => (
    !getIsMarketingPage(pathname) &&
    !getIsValidAdminPath(pathname)
)
