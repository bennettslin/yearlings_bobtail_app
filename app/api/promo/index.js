import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../constants/routing'

export const getTitleForPromoKey = promoKey => {
    switch (promoKey) {
        case ONESHEET_SUBPATH:
            return 'Onesheet'
        case ARTUP_SUBPATH:
            return '"Artup" Presentation'
    }

    return 'Promo Homepage'
}
