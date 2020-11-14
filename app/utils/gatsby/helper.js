import { getIsAppSession } from '../browser'

const VALID_ADMIN_PATHS = [
    'Actors',
    'Annotations',
    'Previewer',
    'Things',
    'Skies',
    'Progress'
]

const getRawPathname = pathname => pathname.replace(/\//g, '')

export const getNeedsPageElementWrapper = pathname => {
    /**
     * If session started from the app rather than the pitch page, this means
     * that we navigated to the pitch path from the pitch popup. In which case,
     * we need the page element wrapper.
     */
    if (getRawPathname(pathname) === 'Pitch') {
        return getIsAppSession()

    } else {
        /**
         * If in staging, wrap in the page element wrapper only if it isn't one
         * of the valid admin paths.
         */
        return IS_STAGING ? (
            !VALID_ADMIN_PATHS.some(
                route => route === getRawPathname(pathname)
            )
        /**
         * If we're not in staging, then no admin paths are valid, so always
         * wrap in the page element wrapper.
         */
        ) : true
    }
}
