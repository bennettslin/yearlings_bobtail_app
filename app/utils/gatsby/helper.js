import {
    getAlbumReducers,
    getPitchReducers,
} from '../../redux'
import {
    getIsValidAdminPath,
    getIsValidPitchPagePath,
    getIsStorePath,
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

export const getReducers = (pathname, search) => (
    getIsPitchPage(pathname) ?
        getPitchReducers(pathname) :
        getAlbumReducers(pathname, search)
)

export const getNeedsAlbumContext = pathname => (
    !getIsPitchPage(pathname) &&
    !getIsValidAdminPath(pathname)
)
