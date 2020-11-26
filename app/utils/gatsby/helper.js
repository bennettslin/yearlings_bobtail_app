import {
    getAlbumReducers,
    getPitchReducers
} from '../../redux'
import { getRoutingSongIndex } from '../../helpers/routing'
import {
    getWindow,
    getIsAlbumSession
} from '../browser'
import { getIsServerSide } from '../server'
import { getIsPitchSegmentValid } from '../../api/pitch/segments'

const VALID_ADMIN_PATHS = [
    'Actors',
    'Annotations',
    'Previewer',
    'Things',
    'Skies',
    'Progress'
]

const getPathname = element => {
    const {
            location: {
                pathname
            }
        } = element.props.location ?
            element.props :
            getWindow(),

        pathnames = pathname.split('/').filter(name => Boolean(name))

    // Only get rid of initial forward slash.
    return pathnames.join('/')
}

const getIsValidPitchPage = pathname => {
    // If it's the pitch root path, it's valid.
    if (pathname === 'Pitch') {
        return true

    // If it's a pitch page path...
    } else if (pathname.includes('Pitch/page_')) {

        // Ensure index is numeric.
        const pagePitchIndex = parseInt(pathname.replace(/\D/g, ''))

        // Ensure index exists.
        return getIsPitchSegmentValid(pagePitchIndex)
    }

    return false
}

export const getIsPitchPage = element => (
    getIsValidPitchPage(getPathname(element)) &&

    /**
     * Ensure that we are not in the pitch popup, since it will also show the
     * Pitch pathname while it is open.
     */
    !getIsAlbumSession()
)

const getIsValidAdminPath = element => (
    // Admin paths are only valid in staging.
    IS_STAGING && VALID_ADMIN_PATHS.some(
        route => route === getPathname(element)
    )
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
