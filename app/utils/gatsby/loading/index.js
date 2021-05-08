import { getIsAlbumPage } from '../album'
import { getIsMarketingPage } from '../marketing'

export const getShowLoadingContainer = pathname => (
    getIsAlbumPage(pathname) || getIsMarketingPage(pathname)
)
