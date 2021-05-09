import { ALBUM_TITLE } from '../../constants/paths'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../constants/routing'

export const getHelmetTitleForPromoPath = promoPath => {
    let pageTitle
    switch (promoPath) {
        case ARTUP_SUBPATH:
            pageTitle = `Artup pitch`
            break
        case ONESHEET_SUBPATH:
            pageTitle = `Onesheet`
            break
        default:
            pageTitle = `Promo`
            break
    }
    return `${pageTitle} | ${ALBUM_TITLE}`
}
