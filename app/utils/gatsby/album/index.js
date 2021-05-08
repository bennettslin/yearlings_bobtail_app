import { getIsValidAdminPath } from '../admin'
import { getIsMarketingPage } from '../marketing'

export const getIsAlbumPage = pathname => (
    !getIsMarketingPage(pathname) &&
    !getIsValidAdminPath(pathname)
)
