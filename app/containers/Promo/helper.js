import { getTitleForAlbum } from '../../api/album/title'
import {
    ARTUP_SUBPATH,
    ARTUP_2_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../constants/routing'

export const getHelmetTitleForPromoKey = promoKey => {
    let pageTitle
    switch (promoKey) {
        case ARTUP_SUBPATH:
            pageTitle = `"Invest in Artups"`
            break
        case ARTUP_2_SUBPATH:
            pageTitle = `"Artup 2" presentation`
            break
        case ONESHEET_SUBPATH:
            pageTitle = `Onesheet`
            break
        default:
            pageTitle = `Promo`
            break
    }
    return `${pageTitle} | ${getTitleForAlbum()}`
}
