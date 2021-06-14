import homepage from './homepage'
import onesheet from './onesheet'
import artup from './artup'
import artup2 from './artup2'
import { getSmartQuotedEntity } from '../../utils/format/smartQuote'
import { RUNTIME } from '../../../app/constants/server'

export default {
    _build: RUNTIME,
    titles: {
        homepage: getSmartQuotedEntity(`Promo Homepage`),
        onesheet: getSmartQuotedEntity(`Onesheet`),
        artup: getSmartQuotedEntity(`Invest in Artups`),
        artup2: getSmartQuotedEntity(`Invest in Artups 2`),
    },
    homepage,
    onesheet,
    artup,
    artup2,
}
