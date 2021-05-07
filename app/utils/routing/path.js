import { getIsArtupSlideValid } from '../../api/artup/slides'
import {
    ARTUP_PATH_KEY,
    PROMO_PATH,
    VALID_ADMIN_PATHS,
    VALID_PROMO_CHILD_PATHS,
} from '../../constants/routing'

const getPathname = (pathname = '') => (
    pathname
        // Split by slashes and remove empty strings.
        .split('/')
        .filter(name => Boolean(name))
        // Get rid of beginning and end slashes.
        .join('/')
)

export const getParsedLocation = ({
    element: { props: { location: {
        pathname: elementPathname,
        search: elementSearch,
    } = {} } = {} } = {},
    window: { location: {
        pathname: windowPathname,
        search: windowSearch,
    } = {} } = {},
}) => ({
    pathname: getPathname(elementPathname || windowPathname),
    search: elementSearch || windowSearch,
})

export const getIndexFromPath = pathname => (
    // Remove all non-digits.
    parseInt(pathname.replace(/\D/g, ''))
)

export const getIsValidAdminPath = pathname => (
    // Admin paths are only valid when not in production build.
    !IS_PRODUCTION && VALID_ADMIN_PATHS[pathname]
)

export const getIsStorePath = pathname => (
    // It's a store path if it's an album page...
    !VALID_ADMIN_PATHS[pathname] ||

    // Or if it's on the global annotations page and not in production build.
    (
        !IS_PRODUCTION &&
        pathname === 'annotations'
    )
)

export const getValidArtupIndex = pathname => {
    if (pathname.includes(`${ARTUP_PATH_KEY}/`)) {

        // Ensure index is numeric.
        const pageArtupIndex = getIndexFromPath(pathname)

        if (getIsArtupSlideValid(pageArtupIndex)) {
            return pageArtupIndex
        }
    }

    return NaN
}

export const getIsValidArtupPagePath = pathname => (
    // It's valid if it's the pitch root path...
    pathname === ARTUP_PATH_KEY ||

    // Or if it's a valid pitch index path.
    Number.isFinite(getValidArtupIndex(pathname))
)

export const getIsValidPromoPagePath = pathname => (
    // It's valid if it's the promo root path...
    pathname === PROMO_PATH ||
    (
        // Or if it's a promo child page.
        pathname.includes(`${PROMO_PATH}/`) &&
        VALID_PROMO_CHILD_PATHS[pathname.replace(`${PROMO_PATH}/`, '')]
    )
)
