import { VALID_ADMIN_PATHS } from '../../../constants/routing'

export const getIsValidAdminPath = pathname => (
    // Admin paths are only valid when not in production build.
    !IS_PRODUCTION && VALID_ADMIN_PATHS[pathname]
)
