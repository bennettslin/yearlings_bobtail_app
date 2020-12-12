import { getIsPitchSegmentValid } from '../api/pitch/segments'
import { getWindow } from '../utils/browser'

export const VERSE_QUERY_FIELD = 'verse'
export const ANNOTATION_QUERY_FIELD = 'annotation'

const VALID_ADMIN_PATHS = [
    'Actors',
    'Annotations',
    'Previewer',
    'Things',
    'Skies',
    'Progress'
]

export const getPathname = (element = {}) => {
    const pathname =
        // If called from Gatsby, element is passed.
        element?.props?.location?.pathname ||

        // Otherwise, get from window location.
        getWindow().location.pathname,

        // Split by slashes and remove empty strings.
        pathnames = pathname.split('/').filter(name => Boolean(name))

    // Get rid of beginning and end slashes.
    return pathnames.join('/')
}

export const getIndexFromPath = pathname => (
    // Remove all non-digits.
    parseInt(pathname.replace(/\D/g, ''))
)

export const getIsValidAdminPath = element => (
    // Admin paths are only valid in staging.
    IS_STAGING && VALID_ADMIN_PATHS.some(
        route => route === getPathname(element)
    )
)

export const getValidPitchIndex = pathname => {
    if (pathname.includes('Pitch/')) {

        // Ensure index is numeric.
        const pagePitchIndex = getIndexFromPath(pathname)

        if (getIsPitchSegmentValid(pagePitchIndex)) {
            return pagePitchIndex
        }
    }

    return NaN
}

export const getIsValidPitchPagePath = pathname => (
    // It's valid if it's the pitch root path...
    pathname === 'Pitch' ||

    // Or if it's a valid pitch index path.
    Number.isFinite(getValidPitchIndex(pathname))
)
