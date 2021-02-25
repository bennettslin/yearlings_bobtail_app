import { getIsPitchSegmentValid } from '../../api/pitch/segments'
import { getWindow } from '../browser'

const VALID_ADMIN_PATHS = {
    actors: true,
    annotations: true,
    previewer: true,
    progress: true,
    skies: true,
    things: true,
}

const PITCH_PATH = 'pitch'

export const getPathname = () => {
    const
        pathname = getWindow().location.pathname,

        // Split by slashes and remove empty strings.
        pathnames = pathname.split('/').filter(name => Boolean(name))

    // Get rid of beginning and end slashes.
    return pathnames.join('/')
}

export const getIndexFromPath = pathname => (
    // Remove all non-digits.
    parseInt(pathname.replace(/\D/g, ''))
)

export const getIsValidAdminPath = () => (
    // Admin paths are only valid when not in production build.
    !IS_PRODUCTION && VALID_ADMIN_PATHS[getPathname()]
)

export const getIsStorePath = () => (
    !VALID_ADMIN_PATHS[getPathname()] || (
        !IS_PRODUCTION &&
        getPathname() === 'annotations'
    )
)

export const getValidPitchIndex = pathname => {
    if (pathname.includes(`${PITCH_PATH}/`)) {

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
    pathname === PITCH_PATH ||

    // Or if it's a valid pitch index path.
    Number.isFinite(getValidPitchIndex(pathname))
)
