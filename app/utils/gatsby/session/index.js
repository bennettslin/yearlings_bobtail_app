import { getDocument, getIsServerSide } from '../../browser'
import { getIsAdminPage } from '../admin'
import { getIsAlbumPage } from '../album'
import { getIsMarketingPage } from '../marketing'

export const getShowLoadingContainer = pathname => (
    getIsAlbumPage(pathname) || getIsMarketingPage(pathname)
)

export const getIsAlbumClientSession = () => (
    /**
     * This gets called to determine whether navigation to the marketing path
     * started from the album or a marketing page.
     */
    !getIsServerSide() &&

    // This approach is fragile, but it works for now.
    getDocument().getElementsByClassName('RootContainer').length
)

export const getIsNotFoundPage = pathname => (
    !getIsAdminPage(pathname) &&
    !getIsAlbumPage(pathname) &&
    !getIsMarketingPage(pathname)
)
