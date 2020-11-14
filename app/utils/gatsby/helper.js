import { getIsAlbumSession } from '../browser'

const VALID_ADMIN_PATHS = [
    'Actors',
    'Annotations',
    'Previewer',
    'Things',
    'Skies',
    'Progress'
]

const getRawPathname = pathname => pathname.replace(/\//g, '')

export const getNeedsAlbumPageWrapper = pathname => {
    /**
     * If session started from the album rather than the pitch page, this means
     * that we navigated to the pitch path from the pitch popup. In which case,
     * we need the album page wrapper.
     */
    if (getRawPathname(pathname) === 'Pitch') {
        return getIsAlbumSession()

    } else {
        /**
         * If in staging, wrap in the album page wrapper only if it isn't one
         * of the valid admin paths.
         */
        return IS_STAGING ? (
            !VALID_ADMIN_PATHS.some(
                route => route === getRawPathname(pathname)
            )
        /**
         * If we're not in staging, then no admin paths are valid, so always
         * wrap in the album page wrapper.
         */
        ) : true
    }
}
