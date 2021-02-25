import {
    getAlbumReducers,
    getPitchReducers,
} from '../../redux'
import {
    getPathname,
    getIsValidAdminPath,
    getIsValidPitchPagePath,
    getIsStorePath,
} from '../routing/pathname'
import { getRoutingSongIndex } from '../routing/routing'
import { getIsAlbumSession } from '../browser'
import { getIsServerSide } from '../server'

export const getIsPitchPage = () => (
    getIsValidPitchPagePath(getPathname()) &&

    /**
     * Ensure that we are not in the pitch popup, since it will also show the
     * Pitch pathname while it is open.
     */
    !getIsAlbumSession()
)

export const getNeedsStoreProvider = () => {
    /**
     * If we're on the server side, then we don't have access to the pathname,
     * so just always wrap it in the store provider.
     */
    if (getIsServerSide()) {
        return true
    }

    return getIsStorePath()
}

export const getReducers = () => (
    getIsPitchPage() ?
        getPitchReducers() :
        getAlbumReducers(getRoutingSongIndex())
)

export const getNeedsAlbumContext = () => (
    !getIsPitchPage() &&
    !getIsValidAdminPath()
)
