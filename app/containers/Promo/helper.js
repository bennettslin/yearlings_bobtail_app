import { ALBUM_TITLE } from '../../constants/paths'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../constants/routing'

export const getHelmetTitleForPromoKey = promoKey => {
    let pageTitle
    switch (promoKey) {
        case ARTUP_SUBPATH:
            pageTitle = `"Artup" presentation`
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
