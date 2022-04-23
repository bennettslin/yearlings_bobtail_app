import { getDocument, getIsServerSide } from '../../browser'
import { getIsAdminPage } from '../admin'
import { getIsAlbumSession } from '../album'
import { getIsPromoSession } from '../promo'

export const getShowLoadingContainer = pathname => (
    getIsAlbumSession(pathname) || getIsPromoSession(pathname)
)

export const getIsAlbumClientSession = () => (
    /**
     * This gets called to determine whether navigation to the promo path
     * started from the album or a promo page.
     */
    !getIsServerSide() &&

    // This approach is fragile, but it works for now.
    Boolean(getDocument().getElementsByClassName('RootContainer').length)
)

export const getIsNotFoundPage = pathname => (
    !getIsAdminPage(pathname) &&
    !getIsAlbumSession(pathname) &&
    !getIsPromoSession(pathname)
)
