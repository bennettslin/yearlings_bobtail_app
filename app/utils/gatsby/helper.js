import {
    getAlbumReducers,
    getPitchReducers
} from '../../redux'
import {
    getPathname,
    getIsValidAdminPath,
    getIsValidPitchPagePath
} from '../../helpers/pathname'
import { getRoutingSongIndex } from '../../helpers/routing'
import { getIsAlbumSession } from '../browser'
import { getIsServerSide } from '../server'

export const getIsPitchPage = element => (
    getIsValidPitchPagePath(getPathname(element)) &&

    /**
     * Ensure that we are not in the pitch popup, since it will also show the
     * Pitch pathname while it is open.
     */
    !getIsAlbumSession()
)

export const getNeedsStoreProvider = element => {
    /**
     * If we're on the server side, then we don't have access to the pathname,
     * so just always wrap it in the store provider.
     */
    if (getIsServerSide()) {
        return true
    }

    // If it's not a valid admin path, then it needs the store provider.
    return !getIsValidAdminPath(element)
}

export const getReducers = element => (
    getIsPitchPage(element) ?
        getPitchReducers() :
        getAlbumReducers(getRoutingSongIndex())
)

export const getNeedsAlbumContext = element => (
    !getIsPitchPage(element) &&
    !getIsValidAdminPath(element)
)
