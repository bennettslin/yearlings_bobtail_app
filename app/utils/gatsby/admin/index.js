import { VALID_ADMIN_PATHS } from '../../../constants/routing'

export const getIsValidAdminPath = pathname => (
    // Admin paths are only valid when not in production build.
    !IS_PRODUCTION && VALID_ADMIN_PATHS[pathname]
)

export const getIsAdminPageWithStore = pathname => (
    !IS_PRODUCTION && (
        // Annotations page needs access to selected store.
        pathname === 'annotations'
    )
)
