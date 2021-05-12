import { getDocument, getIsServerSide } from '../../browser'
import { getIsAdminPage } from '../admin'
import { getIsAlbumPage } from '../album'
import { getIsPromoPage } from '../marketing'

export const getShowLoadingContainer = pathname => (
    getIsAlbumPage(pathname) || getIsPromoPage(pathname)
)

export const getIsAlbumClientSession = () => (
    /**
     * This gets called to determine whether navigation to the promo path
     * started from the album or a promo page.
     */
    !getIsServerSide() &&

    // This approach is fragile, but it works for now.
    getDocument().getElementsByClassName('RootContainer').length
)

export const getIsNotFoundPage = pathname => (
    !getIsAdminPage(pathname) &&
    !getIsAlbumPage(pathname) &&
    !getIsPromoPage(pathname)
)
