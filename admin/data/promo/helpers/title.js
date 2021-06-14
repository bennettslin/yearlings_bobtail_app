import { getSmartQuotedEntity } from '../../../utils/format/smartQuote'
import {
    ARTUP_SUBPATH,
    ARTUP_2_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../../../app/constants/routing'

export const getTitleForPromoPage = promoKey => {
    switch (promoKey) {
        case ONESHEET_SUBPATH:
            return getSmartQuotedEntity(`Onesheet`)
        case ARTUP_SUBPATH:
            return getSmartQuotedEntity('Invest in Artups')
        case ARTUP_2_SUBPATH:
            return getSmartQuotedEntity('Invest in Artups 2')
        default:
            return getSmartQuotedEntity(`Promo Homepage`)
    }
}
