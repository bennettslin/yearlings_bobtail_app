import { getSmartQuotedEntity } from '../../../utils/format/smartQuote'
import {
    ARTUP_SUBPATH,
    ARTUP_2_SUBPATH,
    ONESHEET_SUBPATH,
    PROMO_PATH,
} from '../../../../app/constants/routing'

export default {
    [PROMO_PATH]: getSmartQuotedEntity(`Promo Homepage`),
    [ONESHEET_SUBPATH]: getSmartQuotedEntity(`Onesheet`),
    [ARTUP_SUBPATH]: getSmartQuotedEntity('Invest in Artups'),
    [ARTUP_2_SUBPATH]: getSmartQuotedEntity('Invest in Artups 2'),
}
